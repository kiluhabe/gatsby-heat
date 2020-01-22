import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

type ImageNode = Partial<{
    relativePath: string
    sizes: FluidObject | FluidObject[]
}>

type ImageEdge = {
    node: ImageNode
}

export function useImage(filename: string): FluidObject | FluidObject[] | undefined {
    const { images } = useStaticQuery(graphql`
        query {
            images: allFile {
                edges {
                    node {
                        relativePath
                        name
                        childImageSharp {
                            sizes(maxWidth: 800) {
                                ...GatsbyImageSharpSizes
                            }
                        }
                    }
                }
            }
        }
    `)
    const image = images.edges.find(({ node }: ImageEdge) => node?.relativePath?.includes(filename))
    return image?.node?.childImageSharp?.sizes
}
