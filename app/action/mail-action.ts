'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function send(FormData: FormData) {
    const mail = FormData.get('mail') as string;
    const tele = FormData.get('tele') as string;
    const message = FormData.get('message') as string;
    const vorname = FormData.get('vorname') as string;
    const nachname = FormData.get('nachname') as string;

    let check1 = FormData.get('check1') as string;
    let check2 = FormData.get('check2') as string;
    let check3 = FormData.get('check3') as string;

    if (check1 === 'on') {
        check1 = 'Wird in Mail aso Angezeigt vom 1Check';
    } else {
        check1 = '';
    }
    if (check2 === 'on') {
        check2 = 'Wird in Mail aso Angezeigt vom 2Check';
    } else {
        check2 = '';
    }
    if (check3 === 'on') {
        check3 = 'Wird in Mail aso Angezeigt vom 3Check';
    } else {
        check3 = '';
    }

    const { data } = await resend.emails.send({
        from: 'LGR <onboarding@resend.dev>',
        to: 'xxxxxxxxxxxx', // Add your email address here to receive a copy of the email after registering the domain
        subject: "Eine neue Anfrage von " + vorname + " " + nachname,
        html: `
        <html>
          <body class="bg-gray-100 p-5">
            <div class="max-w-4xl mx-auto bg-white p-5 rounded shadow">
              <h1 class="text-xl font-bold text-gray-700">${vorname} hat eine Anfrage gesendet</h1>
              
              <div class="mt-5">
                <h2 class="text-lg font-semibold text-gray-600">Anfragen:</h2>
                <p class="text-gray-600">${check1}</p>
                <p class="text-gray-600">${check2}</p>
                <p class="text-gray-600">${check3}</p>
              </div>
              
              <div class="mt-5">
                <h2 class="text-lg font-semibold text-gray-600">Nachricht:</h2>
                <p class="text-gray-600">${message}</p>
              </div>

              <div class="mt-5">
                <h2 class="text-lg font-semibold text-gray-600">Kontaktangaben:</h2>
                <p class="text-gray-600">Vorname: ${vorname}</p>
                <p class="text-gray-600">Nachname: ${nachname}</p>
                <p class="text-gray-600">Telefon: ${tele}</p>
                <p class="text-gray-600">Email: ${mail}</p>
              </div>

              <footer class="mt-5 text-sm text-gray-500">
                Diese Nachricht wurde von deiner Webseite gesendet. Bei Unklarheiten melde dich doch gerne bei max.schweller@gmail.com
              </footer>
            </div>
          </body>
        </html>
        `
    });
}
