import { useStaticQuery } from 'gatsby'
import Link from '../components/Link'
import * as JsSearch from "js-search"
import React, { useEffect, useState } from "react"
/** @jsx jsx */
import { Box, Flex, Input, Text, Heading, jsx } from 'theme-ui'
import { FiSearch } from "react-icons/fi"
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
            allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___tipo]}, filter: {frontmatter: {templateKey: {nin: ["dias-post","tarifa-post","horario-post"]}}}, limit: 10) {
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
        const fields = edges.map(({ node: item }) => item.fields)

        frontmatter.map((f, i) => {
            f.slug = fields[i].slug
        })

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
        <Box style={{ position: 'relative' }}>
            <Flex onSubmit={handleSubmit} as={'form'} sx={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <Box sx={{ marginLeft: 'auto', flex: 1, marginRight: 3 }}><FiSearch /></Box>
                <Input
                    autoComplete="off"
                    id="Search"
                    value={searchQuery}
                    onChange={searchData}
                    placeholder={"Busqueda"}
                    sx={{ minWidth: "250px", flex: 1 }}
                />
            </Flex>

            {queryResults && searchQuery &&
                <Box style={{
                    position: 'absolute',
                    right: 0,
                    border: '1px solid primary',
                    backgroundColor: 'white',
                    zIndex: 99,
                    width: '25vw',
                    textAlign: 'left'
                }}>
                    <Box>
                        {queryResults && queryResults.map((item) => {
                            return (

                                <Box key={item.title} bg={'muted'} m={2} p={2}>
                                    <Heading as={"h3"}><Link sx={{ paddingLeft: 0 }} to={item.slug}>{item.title}</Link></Heading>
                                    <Text sx={{ lineHeight: 1.2 }}>
                                        {item.description && item.description.substring(0, 100)}
                                    </Text>
                                </Box>
                            )
                        })
                        }
                    </Box>
                </Box>
            }
        </Box >
    )
}

export default Search