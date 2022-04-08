<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\ContactMail;
use App\Models\Message;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->all();
        $validate = Validator::make(
            $data,
            [
                'mail' => 'required|email',
                'message' => 'required'
            ],
            [
                'mail.required' => 'La mail è obbligatioria',
                'mail.email' => 'L\'indirizzo mail non è valido',
                'message.required' => 'Il messaggio è obbligatorio'
            ]
        );

        if ($validate->fails()) {
            return response()->json(['errors' => $validate->errors()]);
        }

        $message = new Message();
        $message->fill($data);
        $message->save();

        $mail = new ContactMail($data);

        Mail::to(env('MAIL_FROM_ADDRESS'))->send($mail);

        return  response('Mail Sent', 204);
    }
}
