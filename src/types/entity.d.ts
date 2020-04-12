declare interface PostNode {
    id: string
    html: string
    tableOfContents: string
    fields: {
        slug: string
    }
    frontmatter: {
        title: string
        description: string
        categories: string[]
        image: string
        date: string
    }
}

declare interface CategoryNode {
    id: string
    fields: {
        slug: string
    }
    frontmatter: {
        title: string
        description: string
        image: string
    }
}
