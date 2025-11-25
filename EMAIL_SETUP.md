# Email Setup Guide

## Current Setup

The contact form is currently configured to use **mailto** links, which will open the user's default email client with a pre-filled message. This works immediately without any backend setup.

**Email Address:** infoamidharaborewell@gmail.com

## How It Works

When a user submits the form:
1. Their default email client (Gmail, Outlook, etc.) opens
2. A new email is created with:
   - **To:** infoamidharaborewell@gmail.com
   - **Subject:** Contact Form Inquiry from [User Name]
   - **Body:** Contains all form details (name, email, phone, message)

## Alternative: EmailJS Setup (Optional)

If you want emails to be sent directly without opening the email client, you can use EmailJS:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template

### Step 2: Get Your Credentials
- Service ID
- Template ID
- Public Key

### Step 3: Update Contact.jsx
Uncomment the EmailJS code in `src/components/Contact.jsx` and replace:
- `YOUR_SERVICE_ID` with your EmailJS service ID
- `YOUR_TEMPLATE_ID` with your EmailJS template ID
- `YOUR_PUBLIC_KEY` with your EmailJS public key

### EmailJS Template Variables
Your EmailJS template should include these variables:
- `{{to_email}}` - Will be set to infoamidharaborewell@gmail.com
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone number
- `{{message}}` - User's message

## Current Email Configuration

**Recipient Email:** infoamidharaborewell@gmail.com

The form will send all inquiries to this email address.

