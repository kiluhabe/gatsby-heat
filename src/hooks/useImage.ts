import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

type ImageNode = Partial<{
    relativePath: string
    fixed: FluidObject
}>

type ImageEdge = {
    node: ImageNode
}

export function useImage(filename: string): FluidObject | undefined {
    const { images } = useStaticQuery(graphql`
        query {
            images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                edges {
                    node {
                        relativePath
                        name
                        childImageSharp {
                            sizes(maxWidth: 9999) {
                                ...GatsbyImageSharpSizes
                            }
                        }
                    }
                }
            }
        }
    `)
    const image = images.edges.find(({ node }: ImageEdge) => node?.relativePath?.includes(filename))
    if (!image) {
        throw new Error('Image not found.')
    }
    return image?.node?.childImageSharp?.sizes
}
