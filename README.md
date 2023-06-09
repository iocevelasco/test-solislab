# Introduction

This is a simplified Shopping Cart module, consisting of two Components:

1. Cart (in src/Cart.js)
2. CartItem (in src/CartItem.js)

This is a shopping cart for a cafe that sells two categories of items:

- Breakfast
- Drinks

Use React Hooks to implement the following requirements.

# Requirements

## Requirement 1: Render dynamic cart items - DONE

In Cart.js, you can see the cart state is coded in there with 2 cart items. However the cart state is not being correctly rendered on the front-end.

Modify the code so that the 4 cart items in Cart.js are displayed correctly on the front-end with the correct product name, quantity and price.

## Requirement 2: Dynamic sub-total and total - DONE

Make sure that when quantity is updated, the line item sub-totals and cart total are correct.

## Requirement 3: Remove from cart - DONE

Make sure it is possible to remove a cart item by interacting with the UI.

## Requirement 4: Discount rules

The following discount rules apply to a cart:

- For every 2 breakfast items, apply a 20% discount.
- A breakfast item and a drink item will be considered a "set". Apply a 10% discount for each set in the cart.

Make sure the Discount and Total values are calculated correctly.

## Requirement 5: Fetch cart from cart.json

Currently, the cart items are hard-coded in Cart.js. In reality, usually cart items are loaded from an API endpoint.

Modify the code so that the cart state is loaded from the `/cart.json` endpoint (see the public/cart.json file) instead of being hardcoded.
