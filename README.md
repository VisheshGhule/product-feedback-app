# 📦 Full-Stack Node.js + Angular Deployment on AWS (EC2, RDS, S3, CI/CD)

## 🧠 Introduction

This is the complete repository and deployment setup for my full-stack project where I deployed an Angular frontend and Node.js backend using Amazon EC2, RDS, S3, and fully automated CI/CD pipelines via CodePipeline and CodeDeploy.

It covers real-world AWS architecture — including private/public subnets, Application Load Balancer, Bastion Host, and end-to-end automation from GitHub push to production release.

📖 Read the full guide on Hashnode:  
👉 [https://visheshblog.hashnode.dev/project-2-deploying-fullstack-nodejs-angular-with-ec2-rds-and-s3](https://visheshblog.hashnode.dev/project-2-deploying-fullstack-nodejs-angular-with-ec2-rds-and-s3)

---

## 🛠️ Tech Stack

### Frontend:
- Angular
- Hosted on Amazon S3 (Static Website Hosting)

### Backend:
- Node.js (Express.js)
- Deployed on EC2 in a private subnet (behind ALB)

### Database:
- Amazon RDS (MySQL)

### CI/CD:
- AWS CodePipeline
- AWS CodeDeploy
- GitHub (as source provider)

### Networking:
- VPC with Public & Private Subnets
- NAT Gateway + Bastion Host
- Application Load Balancer (ALB)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/VisheshGhule/product-feedback-app.git
cd product-feedback-app
```

---

### 2. Frontend Deployment (Angular → S3)

```bash
cd frontend
nvm install 20
nvm use 20
npm install
npm run build
```

This will generate the production-ready files in:
```
frontend/dist/product-feedback-app/
```

Now go to the AWS Console:

- Create an S3 Bucket
- Enable Static Website Hosting
- Set index.html as the default root document
- Add this bucket policy for public read access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

- Upload contents of dist/product-feedback-app (not the folder itself) into the bucket
- (Optional) Set up CloudFront for HTTPS and global CDN

---

### 3. Backend Deployment (Node.js → EC2)

- Create a VPC with private and public subnets
- Launch EC2 instance in a private subnet for backend
- Set up a Bastion Host (EC2 in public subnet) for SSH access
- Install Node.js and NVM on the backend EC2
- Create an IAM role for CodeDeploy and assign it to the EC2 instance
- Set up CodeDeploy application and deployment group
- Set up CodePipeline:
  - Source: GitHub
  - Deploy: CodeDeploy

→ Every GitHub push triggers an automatic deployment via CodePipeline.

---

### 4. Amazon RDS (MySQL/PostgreSQL)

- Create a DB instance in private subnet
- Configure security groups to allow backend EC2 access
- Add database credentials in `.env` file in backend

Example:
```
DB_HOST=mydb.abc123xyz.us-west-2.rds.amazonaws.com
DB_USER=admin
DB_PASS=yourpassword
DB_NAME=product_feedback
```

- Make sure dotenv is configured to load this file in `app.ts`

---

### 5. Application Load Balancer (ALB)

- Create an ALB in public subnet
- Create a target group with backend EC2 on port 3000
- Create a listener for port 80 → forward to target group
- Health check should point to `/` on port 3000
- ALB DNS will publicly expose your backend

---

## 🧪 Testing

- Angular Frontend:  
  http://your-s3-bucket-url 

- Backend API:  
  http://your-alb-dns-name/

Verify with:
```bash
curl http://your-alb-dns-name/
```

---

## 🗺️ CI/CD Architecture

GitHub → CodePipeline → CodeDeploy → EC2 (Backend) → RDS  
Frontend → S3 → (Optional) CloudFront → Browser

---

## ✅ Summary

- Clone the repo
- Build and deploy Angular frontend to S3
- Set up EC2 for backend using CodeDeploy & CodePipeline
- Create and connect to Amazon RDS
- Configure Load Balancer for public access
- Enjoy a scalable, automated full-stack deployment on AWS 🚀

📖 Full blog with screenshots & step-by-step guide:  
👉 [Hashnode Guide](https://visheshblog.hashnode.dev/project-2-deploying-fullstack-nodejs-angular-with-ec2-rds-and-s3)






