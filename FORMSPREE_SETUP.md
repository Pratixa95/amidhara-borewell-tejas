# Formspree Email Setup

## Current Setup

The contact form is now configured to use **Formspree**, a free service that sends form submissions directly to your email inbox.

**Your Email:** infoamidharaborewell@gmail.com

## How It Works

1. When a user submits the form, it sends the data to Formspree
2. Formspree forwards the email to: **infoamidharaborewell@gmail.com**
3. You receive an email with all the form details

## Setup Steps (One-time)

1. **Go to Formspree**: https://formspree.io/
2. **Sign up** for a free account
3. **Create a new form** endpoint
4. **Update the form endpoint** in `src/components/Contact.jsx`:
   - Replace `https://formspree.io/f/xpzgqjpn` with your Formspree form endpoint
   - Your endpoint will look like: `https://formspree.io/f/YOUR_FORM_ID`

## Alternative: Use Your Own Formspree Endpoint

If you want to use your own Formspree account:

1. Sign up at https://formspree.io/
2. Create a form
3. Copy your form endpoint URL
4. Update line 33 in `src/components/Contact.jsx`:
   ```javascript
   const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
   ```

## Testing

1. Fill out the contact form on your website
2. Submit it
3. Check your email: **infoamidharaborewell@gmail.com**
4. You should receive an email with the form submission

## Free Tier Limits

- Formspree free tier: 50 submissions per month
- Perfect for small to medium websites
- Upgrade available if you need more

## Troubleshooting

If emails aren't arriving:
1. Check your spam folder
2. Verify the email address is correct: infoamidharaborewell@gmail.com
3. Check Formspree dashboard for submission logs
4. Make sure your Formspree form endpoint is correct

