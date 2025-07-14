// Generated types for Tina CMS
// This file provides TypeScript types for content collections

export interface StudsCollection {
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  gallery?: Array<{
    image: string;
    alt: string;
    caption?: string;
  }>;
  traits?: Array<{
    trait: string;
  }>;
  breeding?: {
    bloodline?: string;
    registration?: string;
    healthClearances?: string;
    available?: boolean;
    studFee?: string;
  };
  inspiration?: string;
  category: 'studs' | 'retired' | 'upcoming';
  order?: number;
  featured?: boolean;
}

export interface LittersCollection {
  title: string;
  birthDate?: string;
  readyDate?: string;
  sire?: string;
  dam?: string;
  description?: string;
  puppies?: Array<{
    name: string;
    gender: 'male' | 'female';
    color?: string;
    price?: string;
    status: 'available' | 'reserved' | 'sold';
    image?: string;
    notes?: string;
  }>;
  gallery?: Array<{
    image: string;
    alt: string;
    caption?: string;
  }>;
  status: 'upcoming' | 'available' | 'sold-out' | 'archived';
  featured?: boolean;
}

export interface PhotosCollection {
  title: string;
  image: string;
  alt: string;
  caption?: string;
  category: 'studs' | 'litters' | 'horrorbullz' | 'featured' | 'general';
  relatedTo?: string;
  dateTaken?: string;
  featured?: boolean;
  tags?: Array<{
    tag: string;
  }>;
}

export interface PagesCollection {
  title: string;
  description?: string;
  hero?: {
    title?: string;
    subtitle?: string;
    backgroundImage?: string;
    videoSrc?: string;
  };
  content?: string;
  sections?: Array<{
    type: 'gallery' | 'text' | 'info-cards' | 'banner' | 'partnership';
    title?: string;
    content?: string;
    data?: string;
  }>;
}

export interface SettingsCollection {
  site?: {
    title: string;
    description: string;
    url?: string;
    logo?: string;
  };
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
    social?: {
      instagram?: string;
      facebook?: string;
      youtube?: string;
    };
  };
  horrorbullz?: {
    title?: string;
    description?: string;
    characters?: Array<{
      name: string;
      description?: string;
      image?: string;
      relatedColor?: string;
    }>;
  };
}

// Query types for GraphQL
export interface TinaMarkdown {
  body: string;
}

export interface TinaMarkdownContent {
  type: string;
  children: Array<{
    type: string;
    text?: string;
    children?: Array<any>;
  }>;
}

// Collection query types
export interface StudsQuery {
  studs: StudsCollection & {
    _sys: {
      filename: string;
      basename: string;
      breadcrumbs: string[];
      path: string;
      relativePath: string;
      extension: string;
    };
  };
}

export interface LittersQuery {
  litters: LittersCollection & {
    _sys: {
      filename: string;
      basename: string;
      breadcrumbs: string[];
      path: string;
      relativePath: string;
      extension: string;
    };
  };
}

export interface PhotosQuery {
  photos: PhotosCollection & {
    _sys: {
      filename: string;
      basename: string;
      breadcrumbs: string[];
      path: string;
      relativePath: string;
      extension: string;
    };
  };
}

export interface PagesQuery {
  pages: PagesCollection & {
    _sys: {
      filename: string;
      basename: string;
      breadcrumbs: string[];
      path: string;
      relativePath: string;
      extension: string;
    };
  };
}

export interface SettingsQuery {
  settings: SettingsCollection & {
    _sys: {
      filename: string;
      basename: string;
      breadcrumbs: string[];
      path: string;
      relativePath: string;
      extension: string;
    };
  };
}

// Collection list query types
export interface StudsConnection {
  edges: Array<{
    node: StudsCollection & {
      _sys: {
        filename: string;
        basename: string;
        breadcrumbs: string[];
        path: string;
        relativePath: string;
        extension: string;
      };
    };
  }>;
}

export interface LittersConnection {
  edges: Array<{
    node: LittersCollection & {
      _sys: {
        filename: string;
        basename: string;
        breadcrumbs: string[];
        path: string;
        relativePath: string;
        extension: string;
      };
    };
  }>;
}

export interface PhotosConnection {
  edges: Array<{
    node: PhotosCollection & {
      _sys: {
        filename: string;
        basename: string;
        breadcrumbs: string[];
        path: string;
        relativePath: string;
        extension: string;
      };
    };
  }>;
}

// Helper function types
export type TinaField<T = any> = {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  description?: string;
  ui?: any;
} & T;

export type TinaTemplate = {
  label: string;
  name: string;
  fields: TinaField[];
};

export type TinaCollection = {
  name: string;
  label: string;
  path: string;
  format: 'md' | 'mdx' | 'json';
  fields: TinaField[];
  templates?: TinaTemplate[];
  ui?: any;
};

// Export queries function for compatibility
export const queries = () => ({
  studs: () => ({}),
  litters: () => ({}),
  photos: () => ({}),
  pages: () => ({}),
  settings: () => ({})
});

  