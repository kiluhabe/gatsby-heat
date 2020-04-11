import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

type ImageNode = Partial<{
    relativePath: string
    fluid: FluidObject
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
                            fluid(maxWidth: 1080) {
                                ...GatsbyImageSharpFluid
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
    return image?.node?.childImageSharp?.fluid
}
