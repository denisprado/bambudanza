import React, { useState, useEffect } from "react"
import * as JsSearch from "js-search"
import { useStaticQuery } from 'gatsby'
import { Heanding, Text, Link, Input } from 'theme-ui'
import { union } from "lodash"

const Search = () => {

    const [bookList, setBookList] = useState([])
    const [search, setSearch] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    /**
     * React lifecycle method to fetch the data
     */

    const data = useStaticQuery(graphql`
        query HeaderQuery {
            allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___tipo]}, filter: {frontmatter: {templateKey: {}}}) {
                edges {
                  node {
                    id
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      description
                      templateKey
                    }
                  }
                }
              }
        }
    `)




    /**
     * rebuilds the overall index based on the options
     */
    const rebuildIndex = () => {

        const dataToSearch = new JsSearch.Search('title')
        /**
         *  defines a indexing strategy for the data
         * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
         */
        dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
        /**
         * defines the sanitizer for the search
         * to prevent some of the words from being excluded
         *
         */
        dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
        /**
         * defines the search index
         * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
         */
        dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("title")
        dataToSearch.addIndex('title')
        dataToSearch.addIndex("description")

        dataToSearch.addDocuments(bookList) // adds the data to be searched
        setSearch(dataToSearch)
        setIsLoading(false)
    }

    useEffect(() => {
        const { allMarkdownRemark } = data
        const { edges } = allMarkdownRemark

        const frontmatter = edges.map(({ node: item }) => item.frontmatter)
        //const fields = edges.map(({ node: item }) => item.fields)

        setBookList(frontmatter)
        rebuildIndex()
    }, [searchResults])

    /**
     * 
     * handles the input change and perform a search with js-search
     * in which the results will be added to the state
     */
    const searchData = (e) => {

        const queryResult = search.search(e.target.value);

        setSearchQuery(e.target.value)
        setSearchResults(queryResult)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const queryResults = searchQuery === "" ? bookList : searchResults

    return (
        <div>
            <div style={{ position: 'relative' }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ margin: "0 auto" }}>

                        <Input
                            autoComplete="off"
                            id="Search"
                            value={searchQuery}
                            onChange={searchData}
                            placeholder="Busqueda"
                            sx={{ margin: "0 auto", width: "300px" }}
                        />
                    </div>
                </form>
                {queryResults && searchQuery &&
                    <div style={{ position: 'absolute', border: '1px solid primary', backgroundColor: 'white', zIndex: 99, width: '100%' }}>

                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                borderRadius: "4px",
                                border: "1px solid #d3d3d3",
                            }}
                        >
                            <thead style={{ border: "1px solid #808080" }}>
                                <tr>
                                    <th
                                        style={{
                                            textAlign: "left",
                                            padding: "5px",
                                            fontSize: "14px",
                                            fontWeight: 600,
                                            borderBottom: "2px solid #d3d3d3",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Title
                  </th>
                                    <th
                                        style={{
                                            textAlign: "left",
                                            padding: "5px",
                                            fontSize: "14px",
                                            fontWeight: 600,
                                            borderBottom: "2px solid #d3d3d3",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Description
                  </th>

                                </tr>
                            </thead>
                            <tbody>
                                {queryResults && queryResults.map((item) => {
                                    return (
                                        <tr key={`row_${item.title}`}>
                                            <td
                                                style={{
                                                    fontSize: "14px",
                                                    border: "1px solid #d3d3d3",
                                                }}
                                            >
                                                {item.title}
                                            </td>
                                            <td
                                                style={{
                                                    fontSize: "14px",
                                                    border: "1px solid #d3d3d3",
                                                }}
                                            >
                                                {item.description.substring(0, 100)}
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    )
}

export default Search