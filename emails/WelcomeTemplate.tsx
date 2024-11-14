import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import Link from "next/link";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            {/* Header */}
            <Section className="text-center border-b border-gray-200 pb-4">
              <Img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dsesigns.com%2Fdisplays%2Fbannerdisplays%2Fbanner-tube-freestanding-frame%2Ffirkantet-ramme-fritstaende-aluror-03-mm-o-48-mm-50-x-150-cm.html&psig=AOvVaw3pijWOteqvgosz2SHJeDUK&ust=1731669597350000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIi7ko7a24kDFQAAAAAdAAAAABAE" // Replace with your logo URL
                alt="Logo"
                width="150"
                height="50"
                className="mx-auto mb-2"
              />
            </Section>

            {/* Hero Section */}
            <Section className="text-center py-6">
              <Heading className="text-2xl font-bold text-gray-800 mb-2">
                Welcome to Our Community!
              </Heading>
              <Text className="text-lg text-gray-600">
                We’re excited to have you here. Let’s get you started on your
                journey with us.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="text-center py-6">
              <Text className="text-gray-700 mb-4">
                Our community offers great resources, events, and connections.
                Click the button below to explore more.
              </Text>
              <Button
                className="bg-primary text-white rounded-lg font-semibold text-lg px-6 py-3 inline-block"
                href="https://yourwebsite.com/welcome" // Link to your website or desired page
              >
                Get Started
              </Button>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-4 text-center">
              <Text className="text-gray-500 text-sm mb-2">
                If you have any questions, feel free to{" "}
                <Link
                  href="mailto:support@yourwebsite.com"
                  className="text-primary"
                >
                  contact us
                </Link>
                .
              </Text>
              <Text className="text-gray-500 text-sm">
                Follow us on{" "}
                <Link href="https://facebook.com" className="text-primary">
                  Facebook
                </Link>{" "}
                |{" "}
                <Link href="https://twitter.com" className="text-primary">
                  Twitter
                </Link>{" "}
                |{" "}
                <Link href="https://instagram.com" className="text-primary">
                  Instagram
                </Link>
              </Text>
              <Text className="text-gray-400 text-xs mt-4">
                © 2024 Your Company. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
