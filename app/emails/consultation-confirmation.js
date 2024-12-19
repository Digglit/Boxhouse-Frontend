import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

export const EmailListSignup = ({
  date,
  time,
  name,
  company,
  industry,
  stage,
  completionDate,
  description,
  referrer,
}) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Consultation Scheduled</Heading>
        <Text style={{ ...text, marginBottom: "12px" }}>
          Your consultation has been successfully scheduled for{" "}
          <strong>{date}</strong> at <strong>{time}</strong>. Here&apos;s the
          information you provided us for us to review:
        </Text>
        <Text>
          <strong>Name:</strong> {name}
          <br />
          <strong>Company:</strong> {company}
          <br />
          <strong>Industry:</strong> {industry}
          <br />
          <strong>Current Project Stage:</strong> {stage}
          <br />
          <strong>Ideal Completion Date:</strong> {completionDate}
          <br />
          <strong>Project Description:</strong> {description}
          <br />
          <strong>Referrer:</strong> {referrer}
        </Text>
        <Img
          src={`https://www.BoxhouseConsulting.com/BoxhouseLogo.jpg`}
          width="120"
          height="63"
          alt="Notion's Logo"
        />
        <Text style={footer}>
          <Link
            href="https://www.BoxhouseConsulting.com"
            target="_blank"
            style={{ ...link, color: "#898989" }}
          >
            Boxhouse Consulting
          </Link>
          <br />
          Building tomorrow&apos;s web today.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailListSignup;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "24px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};
