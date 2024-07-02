# LaunchLand

## Project Overview

This is a platform where users can discover and share tech products such as web apps, AI tools, software, games, and mobile apps. The platform allows users to submit new products, upvote or downvote existing products, and post reviews. It includes user authentication, roles for normal users, moderators, and admins, as well as a product moderation system and a payment system for unlocking premium features.

## Features

1. **User Authentication and Authorization**:

   -  Login and Registration with Email/Password and Google Sign-In.
   -  Role-based access for normal users, moderators, and admins.
   -  JWT implementation for secure authentication.

2. **Product Management**:

   -  Users can submit new products for review.
   -  Moderators can approve/reject submitted products and handle reported products.
   -  Admins can manage user roles and monitor site activities.

3. **Voting and Reviews**:

   -  Users can upvote products, with functionality to prevent multiple votes from the same user.
   -  Users can post reviews for products, which are displayed on the product details page.

4. **Product Listings**:

   -  Featured Products and Trending Products sections on the homepage.
   -  Products page with search functionality and pagination.
   -  Dynamic sliders and carousels for product and coupon advertisements.

## Live Links
- [Live Website](https://sa-launchland.web.app)
- [Server-side GitHub Repository](https://github.com/Arefin40/LaunchLand-server)


## To run in your local machine

For client side, run the following commands:
```
git clone https://github.com/Arefin40/LaunchLand-client.git

cd LaunchLand-client && pnpm install

pnpm run dev
```

For server side, run the following commands:
```
git clone https://github.com/Arefin40/LaunchLand-server.git

cd LaunchLand-server && pnpm install

pnpm run dev
```