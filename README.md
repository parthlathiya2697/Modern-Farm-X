This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



Subdomain Configuration
Open the configuration file for the subdomain:

bash
Copy code
sudo nano /etc/nginx/sites-available/subdomain
Add the following configuration:

nginx
Copy code
server {
    listen 80;
    server_name modern-farming.parthlathiya.wiki;

    location / {
        proxy_pass http://localhost:8789;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    error_page 502 /502.html;

    location ~ /\.ht {
        deny all;
    }
}


Step 3: Enable Configurations
Create symbolic links to enable both configurations:

bash
Copy code
sudo ln -s /etc/nginx/sites-available/Portfolio /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/modern-farming /etc/nginx/sites-enabled/
Test the Nginx configuration:

bash
Copy code
sudo nginx -t
Reload Nginx:

bash
Copy code
sudo systemctl reload nginx
