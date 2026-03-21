import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Create transporter (Placeholder - needs real credentials)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            replyTo: `${name} <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `New Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `
        <div style="font-family: serif; color: #2A1B0F; padding: 20px; border: 1px solid #C6A75E;">
            <h2 style="color: #C6A75E;">New Inquiry from Vandna Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        };

        // For demonstration, we'll log it and simulate success if env vars are missing
        console.log('Sending email with options:', mailOptions);

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
        } else {
            console.warn('EMAIL_USER or EMAIL_PASS not set. Simulating email success.');
        }

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
