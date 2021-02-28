import React from "react";
import { RiChatSmile2Line } from "react-icons/ri";
import { Container } from "theme-ui";
import BlogRoll from "../../components/BlogRoll";
import Layout from "../../components/Layout";
import SubNavbar from "../../components/SubNavbar";

const BlogIndexPage = ({ children, showImage }) => {
    return (
        <Layout>
            <SubNavbar
                showImage={false}
                title={"Blog"}
                link={"blog"}
            ></SubNavbar>
            <Container>
                <BlogRoll />
            </Container>
        </Layout>
    );
};

export default BlogIndexPage;
