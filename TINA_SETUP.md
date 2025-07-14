# Tina CMS Setup Guide for Maxline Bulldogs

## Overview
This guide explains how to set up and use Tina CMS for content management on the Maxline Bulldogs website. Tina CMS provides a user-friendly interface for managing content with Git-based workflow.

## 🚀 Quick Start

### Development Setup
1. Install dependencies (already done):
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   # Create .env file
   TINA_PUBLIC_IS_LOCAL=true
   ```

3. Start development server:
   ```bash
   npm run tina:dev
   ```

4. Access the admin panel at: `http://localhost:3000/admin`

### Production Setup (Tina Cloud)

1. **Sign up for Tina Cloud**
   - Go to https://tina.io/
   - Sign up for a free account
   - Connect your GitHub repository

2. **Get your credentials**
   - From your Tina Cloud dashboard, get:
     - Client ID
     - Token

3. **Set up environment variables**
   ```bash
   # Production environment variables
   TINA_CLIENT_ID=your_client_id_here
   TINA_TOKEN=your_token_here
   ```

4. **Update tina/config.ts**
   ```typescript
   export default defineConfig({
     branch,
     clientId: process.env.TINA_CLIENT_ID,
     token: process.env.TINA_TOKEN,
     // ... rest of config
   });
   ```

5. **Deploy to Vercel**
   - Set environment variables in Vercel dashboard
   - Deploy the site
   - Access admin at `yoursite.com/admin`

## 📁 Content Structure

### Collections Available:
- **Champion Studs** (`content/studs/`)
- **Litters** (`content/litters/`)
- **Photo Gallery** (`content/photos/`)
- **Pages** (`content/pages/`)
- **Site Settings** (`content/settings/`)

### Media Organization:
- **Studs**: `public/images/studs/`
- **Litters**: `public/images/litters/`
- **HorrorBullz**: `public/images/horrorbullz/`
- **Gallery**: `public/images/gallery/`

## 🎨 Visual Editing

### Enabling Visual Editing:
1. Add `enableTina={true}` to your Layout component
2. Use the TinaCMS component wrapper
3. Access content through Tina's GraphQL API

### Example Usage:
```astro
---
import Layout from '../layouts/Layout.astro';
// ... other imports
---

<Layout title="My Page" enableTina={true}>
  <!-- Your content here -->
</Layout>
```

## 🔒 Authentication

### Development:
- Uses local authentication
- No login required
- Set `TINA_PUBLIC_IS_LOCAL=true`

### Production:
- Uses Tina Cloud authentication
- Secure login required
- Admin access only

## 📸 Media Management

### Uploading Photos:
1. Go to admin panel
2. Create/edit content
3. Use image fields to upload
4. Photos automatically organize by category

### Photo Categories:
- **studs**: For champion stud photos
- **litters**: For puppy litter photos
- **horrorbullz**: For partnership content
- **featured**: For homepage features
- **general**: For other content

## 🔧 Available Scripts

```bash
# Development with Tina CMS
npm run tina:dev

# Build Tina admin
npm run tina:build

# Run admin only
npm run tina:admin

# Initialize Tina (if needed)
npm run tina:init

# Regular Astro commands
npm run dev
npm run build
npm run preview
```

## 📋 Content Management Features

### Champion Studs:
- **Basic Info**: Name, subtitle, description
- **Gallery**: Multiple photos with captions
- **Traits**: List of characteristics
- **Breeding Info**: Bloodlines, health clearances, availability
- **Inspiration**: Cinematic character connection

### Litters:
- **Litter Details**: Name, birth date, ready date
- **Parents**: Sire and dam information
- **Puppies**: Individual puppy details with photos
- **Status**: Available, reserved, sold tracking

### Photo Gallery:
- **Organized Categories**: Automatic categorization
- **Metadata**: Alt text, captions, tags
- **Relationships**: Link to related studs/litters

### Site Settings:
- **Contact Info**: Phone, email, address
- **Social Media**: Instagram, Facebook, YouTube
- **HorrorBullz Partnership**: Character inspirations

## 🚀 Deployment Workflow

### Git-Based CMS:
1. Edit content in Tina CMS
2. Content saves to Git repository
3. Vercel automatically deploys changes
4. No database required

### Recommended Workflow:
1. **Development**: Use local Tina for testing
2. **Staging**: Deploy to staging with Tina Cloud
3. **Production**: Deploy to production with authentication

## 🔍 Troubleshooting

### Common Issues:

1. **Admin panel not loading**
   - Check environment variables
   - Verify Tina credentials
   - Check console for errors

2. **Images not uploading**
   - Verify media configuration
   - Check directory permissions
   - Ensure Git LFS is set up for large files

3. **Content not saving**
   - Check Git authentication
   - Verify repository permissions
   - Check Tina Cloud connection

4. **Visual editing not working**
   - Ensure `enableTina={true}` is set
   - Check TinaCMS component inclusion
   - Verify content structure

### Support:
- Tina CMS Documentation: https://tina.io/docs/
- GitHub Issues: Create issues for bugs
- Email: Contact for urgent issues

## 📝 Content Guidelines

### For Your Client:

1. **Adding New Studs**:
   - Use descriptive names
   - Include high-quality photos
   - Fill out all breeding information
   - Add cinematic inspiration

2. **Managing Litters**:
   - Update puppy status regularly
   - Include individual puppy photos
   - Keep pricing current
   - Mark availability accurately

3. **Photo Organization**:
   - Use descriptive filenames
   - Add alt text for accessibility
   - Include captions where helpful
   - Organize by category

4. **Content Best Practices**:
   - Write clear, engaging descriptions
   - Use consistent terminology
   - Keep information current
   - Include relevant keywords for SEO

## 🎯 Next Steps

1. **Test the integration**: Try creating and editing content
2. **Set up Tina Cloud**: Get production credentials
3. **Configure deployment**: Set up Vercel environment variables
4. **Train the client**: Show them how to use the admin panel
5. **Monitor performance**: Ensure smooth operation

---

**Note**: This integration provides a complete content management solution with no database required. All content is stored in Git, making it version-controlled and easily deployable. 