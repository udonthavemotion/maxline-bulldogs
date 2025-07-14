// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: null,
  // Get this from tina.io
  token: null,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "studs",
        label: "Champion Studs",
        path: "content/studs",
        format: "mdx",
        ui: {
          router: ({ document }) => `/studs/${document._sys.filename}`
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Stud Name",
            required: true,
            description: "The name of the champion stud (e.g., Joker, Hannibal)"
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            description: "Brief subtitle or tagline"
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            description: "Detailed description of the stud's characteristics and breeding history"
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            description: "Main showcase image of the stud"
          },
          {
            type: "object",
            name: "gallery",
            label: "Photo Gallery",
            list: true,
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image",
                required: true
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
                required: true
              },
              {
                type: "string",
                name: "caption",
                label: "Caption"
              }
            ]
          },
          {
            type: "object",
            name: "traits",
            label: "Traits & Characteristics",
            list: true,
            fields: [
              {
                type: "string",
                name: "trait",
                label: "Trait",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "breeding",
            label: "Breeding Information",
            fields: [
              {
                type: "string",
                name: "bloodline",
                label: "Bloodline",
                description: "Champion bloodline information"
              },
              {
                type: "string",
                name: "registration",
                label: "AKC Registration",
                description: "AKC registration details"
              },
              {
                type: "string",
                name: "healthClearances",
                label: "Health Clearances",
                description: "Health testing and clearances"
              },
              {
                type: "boolean",
                name: "available",
                label: "Available for Breeding"
              },
              {
                type: "string",
                name: "studFee",
                label: "Stud Fee",
                description: "Breeding fee information"
              }
            ]
          },
          {
            type: "string",
            name: "inspiration",
            label: "Cinematic Inspiration",
            description: "The film character or theme that inspired this stud's name"
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["studs", "retired", "upcoming"],
            required: true
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            description: "Order in which this stud appears (lower numbers first)"
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Stud",
            description: "Show this stud prominently on the homepage"
          }
        ]
      },
      {
        name: "litters",
        label: "Litters",
        path: "content/litters",
        format: "mdx",
        ui: {
          router: ({ document }) => `/litters/${document._sys.filename}`
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Litter Name",
            required: true,
            description: "Name for this litter (e.g., 'Joker x Harley Quinn Litter')"
          },
          {
            type: "datetime",
            name: "birthDate",
            label: "Birth Date",
            description: "When the puppies were born"
          },
          {
            type: "datetime",
            name: "readyDate",
            label: "Ready Date",
            description: "When puppies will be ready for new homes"
          },
          {
            type: "string",
            name: "sire",
            label: "Sire (Father)",
            description: "Name of the father stud"
          },
          {
            type: "string",
            name: "dam",
            label: "Dam (Mother)",
            description: "Name of the mother"
          },
          {
            type: "rich-text",
            name: "description",
            label: "Litter Description",
            description: "Details about this litter"
          },
          {
            type: "object",
            name: "puppies",
            label: "Puppies",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Puppy Name",
                required: true
              },
              {
                type: "string",
                name: "gender",
                label: "Gender",
                options: ["male", "female"],
                required: true
              },
              {
                type: "string",
                name: "color",
                label: "Color",
                description: "Coat color and markings"
              },
              {
                type: "string",
                name: "price",
                label: "Price",
                description: "Price for this puppy"
              },
              {
                type: "string",
                name: "status",
                label: "Status",
                options: ["available", "reserved", "sold"],
                required: true
              },
              {
                type: "image",
                name: "image",
                label: "Puppy Photo"
              },
              {
                type: "rich-text",
                name: "notes",
                label: "Notes",
                description: "Special notes about this puppy"
              }
            ]
          },
          {
            type: "object",
            name: "gallery",
            label: "Litter Gallery",
            list: true,
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image",
                required: true
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
                required: true
              },
              {
                type: "string",
                name: "caption",
                label: "Caption"
              }
            ]
          },
          {
            type: "string",
            name: "status",
            label: "Litter Status",
            options: ["upcoming", "available", "sold-out", "archived"],
            required: true
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Litter",
            description: "Show this litter prominently on the homepage"
          }
        ]
      },
      {
        name: "photos",
        label: "Photo Gallery",
        path: "content/photos",
        format: "mdx",
        ui: {
          router: ({ document }) => `/gallery/${document._sys.filename}`
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Photo Title",
            required: true
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true
          },
          {
            type: "string",
            name: "alt",
            label: "Alt Text",
            required: true,
            description: "Descriptive text for accessibility"
          },
          {
            type: "string",
            name: "caption",
            label: "Caption",
            description: "Optional caption for the photo"
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["studs", "litters", "horrorbullz", "featured", "general"],
            required: true
          },
          {
            type: "string",
            name: "relatedTo",
            label: "Related To",
            description: "Name of related stud or litter"
          },
          {
            type: "datetime",
            name: "dateTaken",
            label: "Date Taken",
            description: "When the photo was taken"
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Photo",
            description: "Show this photo prominently"
          },
          {
            type: "object",
            name: "tags",
            label: "Tags",
            list: true,
            fields: [
              {
                type: "string",
                name: "tag",
                label: "Tag",
                required: true
              }
            ]
          }
        ]
      },
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        ui: {
          router: ({ document }) => `/${document._sys.filename}`
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
            description: "SEO description for this page"
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Hero Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Hero Subtitle"
              },
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image"
              },
              {
                type: "string",
                name: "videoSrc",
                label: "Background Video",
                description: "URL to background video"
              }
            ]
          },
          {
            type: "rich-text",
            name: "content",
            label: "Page Content",
            description: "Main content of the page"
          },
          {
            type: "object",
            name: "sections",
            label: "Page Sections",
            list: true,
            fields: [
              {
                type: "string",
                name: "type",
                label: "Section Type",
                options: ["gallery", "text", "info-cards", "banner", "partnership"],
                required: true
              },
              {
                type: "string",
                name: "title",
                label: "Section Title"
              },
              {
                type: "rich-text",
                name: "content",
                label: "Section Content"
              },
              {
                type: "string",
                name: "data",
                label: "Section Data",
                description: "Additional data specific to section type (JSON format)",
                ui: {
                  component: "textarea"
                }
              }
            ]
          }
        ]
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "object",
            name: "site",
            label: "Site Information",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Site Title",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Site Description",
                required: true
              },
              {
                type: "string",
                name: "url",
                label: "Site URL",
                description: "Full URL of your site"
              },
              {
                type: "image",
                name: "logo",
                label: "Site Logo"
              }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              {
                type: "string",
                name: "phone",
                label: "Phone Number"
              },
              {
                type: "string",
                name: "email",
                label: "Email Address"
              },
              {
                type: "string",
                name: "address",
                label: "Physical Address"
              },
              {
                type: "object",
                name: "social",
                label: "Social Media",
                fields: [
                  {
                    type: "string",
                    name: "instagram",
                    label: "Instagram URL"
                  },
                  {
                    type: "string",
                    name: "facebook",
                    label: "Facebook URL"
                  },
                  {
                    type: "string",
                    name: "youtube",
                    label: "YouTube URL"
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "horrorbullz",
            label: "HorrorBullz Partnership",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Partnership Title"
              },
              {
                type: "rich-text",
                name: "description",
                label: "Partnership Description"
              },
              {
                type: "object",
                name: "characters",
                label: "Character Inspirations",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Character Name",
                    required: true
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Character Description"
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Character Image"
                  },
                  {
                    type: "string",
                    name: "relatedColor",
                    label: "Related Bulldog Color"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
