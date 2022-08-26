import React, { useState } from "react"
import tw, { styled, theme } from "twin.macro"
import { navigate } from "gatsby-link"
import { Fade, Slide } from "react-awesome-reveal"

import Seo from "../../components/seo.js"
import { H1, Body } from "../../components/typography"
import { PageContainer, PageHeader, Blobs } from "../../components/containers"
import { SubmitButton } from "../../components/buttons"
import Blob3 from "../../images/blobs/blob3.svg"

const Form = tw.form`
  flex flex-col gap-y-4 text-right
`

const Label = styled.label`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
`

const Input = tw.input`
  rounded-xl px-5 py-2 block w-full outline-none border-pink border-2
`

const Textarea = tw.textarea`
  rounded-xl px-5 py-2 block w-full outline-none border-pink border-2
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactPage = () => {
  const [name, setName] = useState({})
  const [email, setEmail] = useState({})
  const [subject, setSubject] = useState({})
  const [message, setMessage] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...name,
        ...email,
        ...subject,
        ...message,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <PageContainer>
      <Seo title="Contact Us" />
      <Blobs>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob3
            fill={theme("colors.pink.DEFAULT")}
            style={{
              transform: "rotate(170deg) scale(0.70)",
              margin: "-3rem 0 0 55vw",
            }}
          />
        </Slide>
      </Blobs>
      <PageHeader>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <H1>Contact Us</H1>
          <Body>
            Interested in working with us or joining ResInDe? Shoot us a message
            below—we'd love to hear from you!
          </Body>
        </Fade>
      </PageHeader>
      <Form
        name="contact"
        method="post"
        data-netlify="true"
        action="/contact/thanks/"
        onSubmit={handleSubmit}
      >
        <Fade cascade direction="up" delay={800} duration={750} triggerOnce>
          <div>
            <Label for="name">Name:</Label>
            <Input
              placeholder="Name"
              id="name"
              type="text"
              name="name"
              required
              onChange={e => {
                setName({ [e.target.name]: e.target.value })
              }}
            />
          </div>
          <div>
            <Label for="email">Email:</Label>
            <Input
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              required
              onChange={e => {
                setEmail({ [e.target.name]: e.target.value })
              }}
            />
          </div>
          <div>
            <Label for="subject">Subject:</Label>
            <Input
              placeholder="Subject"
              id="subject"
              type="text"
              name="subject"
              required
              onChange={e => {
                setSubject({ [e.target.name]: e.target.value })
              }}
            />
          </div>
          <div>
            <Label for="message">Message:</Label>
            <Textarea
              rows="7"
              placeholder="Message"
              id="message"
              name="message"
              required
              onChange={e => {
                setMessage({ [e.target.name]: e.target.value })
              }}
            />
          </div>
          <SubmitButton
            style={{ width: "fit-content" }}
            pink="true"
            type="submit"
          >
            Submit
          </SubmitButton>
        </Fade>
      </Form>
    </PageContainer>
  )
}

export default ContactPage
