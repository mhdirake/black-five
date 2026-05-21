"use client";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Button, Grid2 } from "@mui/material";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  FaqAccordion,
  FaqAction,
  FaqContainer,
  FaqDetails,
  FaqGrid,
  FaqIntro,
  FaqList,
  FaqQuestion,
  FaqSummary,
  SectionDescription,
  SectionRoot,
  SectionTitle,
} from "./style";

function FaqSection() {
  const { dictionary } = useLocalization();
  const faq = dictionary.faq;

  return (
    <SectionRoot>
      <FaqContainer maxWidth="lg">
        <FaqGrid container spacing={{ xs: 4, md: 5 }}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FaqIntro>
              <SectionTitle component="h2">{faq.title}</SectionTitle>
              <SectionDescription>{faq.description}</SectionDescription>
              <FaqAction>
                <Button color="secondary" href="#register">
                  {faq.action}
                </Button>
              </FaqAction>
            </FaqIntro>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <FaqList>
              {faq.items.map((item) => (
                <FaqAccordion key={item.question} disableGutters>
                  <FaqSummary expandIcon={<AddRoundedIcon color="secondary" />}>
                    <FaqQuestion>{item.question}</FaqQuestion>
                  </FaqSummary>
                  <FaqDetails>{item.answer}</FaqDetails>
                </FaqAccordion>
              ))}
            </FaqList>
          </Grid2>
        </FaqGrid>
      </FaqContainer>
    </SectionRoot>
  );
}

export default FaqSection;
