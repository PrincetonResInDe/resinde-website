exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ProjectsJson implements Node {
      featuredImgPath: File @fileByRelativePath
    }
    type MembersJson implements Node {
      imgPath: File @fileByRelativePath
    }
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter!
    }
    type Frontmatter @infer {
      featuredImage: File @fileByRelativePath
    }
  `
  createTypes(typeDefs)
}