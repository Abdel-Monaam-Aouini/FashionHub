# FashionHub eCommerce Dashboard

FashionHub is an eCommerce dashboard designed to facilitate the management of an online clothing and shoe store, catering to both women and men. The dashboard provides an intuitive interface for administrators to manage products, categories, orders, customers, and gain insights into the business.

## Features

- User authentication: Secure login system for admin users to access the dashboard.
- Admin Dashboard: Centralized interface for managing various administrative functionalities.
- Product Management: Add, edit, and delete products, including images, descriptions, prices, and stock levels.
- Category Management: Create, edit, and delete product categories for effective organization.
- Order Management: View, process, and update order statuses, generate invoices, and communicate with customers.
- Customer Management: Manage customer accounts, view customer information, and make necessary edits.
- Inventory Management: Track stock levels, receive low stock notifications, and update inventory quantities.
- Reporting and Analytics: Generate reports on sales, product performance, and customer analytics.
- Content Management: Manage content pages such as FAQs, About Us, and Contact pages.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Abdel-Monaam-Aouini/FashionHub.git

Install the required dependencies:

cd FashionHub
npm install


      +-------------------------------------+
      |            User Authentication       |
      +-------------------+-----------------+
                          |
                          |
                          |
      +-------------------v-----------------+
      |           Admin Dashboard            |
      +-------------------+-----------------+
                          |
         +----------------v----------------+            +-----------------+
         |       Product Management       |            | Category        |
         |                               |            | Management      |
         +-------------------+-----------+            +-----------------+
                             |
          +------------------v---------------------+ 
          |          Order Management               |
          |                                        |
          +-------------------+--------------------+
                              |
           +------------------v---------------------+
           |         Customer Management            |
           |                                        |
           +-------------------+--------------------+
                              |
           +------------------v---------------------+
           |        Inventory Management            |
           |                                        |
           +-------------------+--------------------+
                              |
           +------------------v---------------------+
           |        Reporting and Analytics         |
           |                                        |
           +-------------------+--------------------+
                              |
           +------------------v---------------------+
           |          Content Management             |
           |                                        |
           +-------------------+--------------------+
