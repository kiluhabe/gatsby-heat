declare interface PostNode {
    id: string
    html: string
    tableOfContents: string
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
    frontmatter: {
        title: string
        description: string
        image: string
    }
}
