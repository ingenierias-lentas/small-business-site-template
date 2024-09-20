# Small Business Site App Template

This is a template that can be used for small businesses to deploy a site very quickly.
This template is best serviced by small businesses who want to work with someone to manage their
website presence, but do not want to use a WYSIWYG site-builder

*NOTE: THIS REPOSITORY IS UNDER ACTIVE DEVELOPMENT. CONTRIBUTIONS ARE WELCOME*

## Usage

### Development

```bash
# install dependencies
npm i

# run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Site management

[Deploying git repositories from Vercel](https://vercel.com/docs/deployments/git)

### Deployment

```bash
# Commit git changes
git add -A
git commit -m "This is my commit message"
git push -u origin main
```

After push, the site should be triggered to deploy via Vercel


## Environment variables

- Rename .env.template to .env.local
- Generate a Sendgrid API key with at least "Send Mail" permissions
- Add your Sendgrid API key to .env.local
- In Vercel (or wherever), add the same environment variables as environment secrets. *NOTE: all secrets should always only be available server-side*

## Further resources

- [Vercel docs](https://vercel.com/docs)
- [NextJS docs](https://nextjs.org/docs)

## TODO

- Content Managment System
- Styling
- Email for arbitrary addresses