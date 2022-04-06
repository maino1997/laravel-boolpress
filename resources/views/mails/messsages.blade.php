@component('mail::message')
    # Introduction
    <p>Email: {{ $contact['mail'] }}</p>
    <p>Email: {{ $contact['message'] }}</p>

    The body of your message.

    @component('mail::button', ['url' => ''])
        Button Text
    @endcomponent

    Thanks,<br>
    {{ config('app.name') }}
@endcomponent
