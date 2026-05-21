"use client";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import { Grid2, Stack } from "@mui/material";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  HowItWorksContainer,
  SectionDescription,
  SectionHeader,
  SectionRoot,
  SectionTitle,
  StepCard,
  StepDescription,
  StepIcon,
  StepNumber,
  StepTitle,
  SummaryItem,
  SummaryList,
  SummaryPanel,
  SummaryTitle,
  TimelineGrid,
} from "./style";

const stepIcons = [
  <AccountCircleOutlinedIcon fontSize="small" key="account" />,
  <WalletOutlinedIcon fontSize="small" key="wallet" />,
  <ConfirmationNumberOutlinedIcon fontSize="small" key="ticket" />,
  <GavelRoundedIcon fontSize="small" key="gavel" />,
];

function HowItWorksSection() {
  const { dictionary } = useLocalization();

  return (
    <SectionRoot id="guide">
      <HowItWorksContainer maxWidth="lg">
        <SectionHeader>
          <SectionTitle component="h2">{dictionary.howItWorks.title}</SectionTitle>
          <SectionDescription>
            {dictionary.howItWorks.description}
          </SectionDescription>
        </SectionHeader>

        <Grid2 container spacing={2.5} alignItems="stretch">
          <Grid2 size={{ xs: 12, lg: 9 }}>
            <TimelineGrid container spacing={2}>
              {dictionary.howItWorks.steps.map((step, index) => (
                <Grid2 key={step.title} size={{ xs: 12, sm: 6, md: 3 }}>
                  <StepCard>
                    <Stack flexDirection={"row"} justifyContent={"space-between"}>
                      <StepNumber>{index + 1}</StepNumber>
                      <StepIcon>{stepIcons[index]}</StepIcon>
                    </Stack>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepCard>
                </Grid2>
              ))}
            </TimelineGrid>
          </Grid2>

          <Grid2 size={{ xs: 12, lg: 3 }}>
            <SummaryPanel>
              <SummaryTitle>{dictionary.howItWorks.summaryTitle}</SummaryTitle>
              <SummaryList>
                {dictionary.howItWorks.summaryItems.map((item) => (
                  <SummaryItem key={item}>
                    <ShieldOutlinedIcon color="secondary" fontSize="small" />
                    {item}
                  </SummaryItem>
                ))}
              </SummaryList>
            </SummaryPanel>
          </Grid2>
        </Grid2>
      </HowItWorksContainer>
    </SectionRoot>
  );
}

export default HowItWorksSection;
