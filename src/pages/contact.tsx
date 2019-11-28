import * as React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactContainer from "../components/contact/ContactContainer";

function Contact()
{
    return (
        <Layout>
            <SEO title="Contact" />
            <ContactContainer />
        </Layout>
    )
}

export default Contact;