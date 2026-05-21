"use client";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { Grid2 } from "@mui/material";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  HighlightItem,
  HighlightList,
  HighlightPanel,
  HighlightText,
  HighlightTitle,
  SectionDescription,
  SectionHeader,
  SectionRoot,
  SectionTitle,
  SecurityCard,
  SecurityContainer,
  SecurityDescription,
  SecurityIcon,
  SecurityTitle,
} from "./style";

const securityIcons = [
  <VerifiedUserOutlinedIcon key="verify" fontSize="small" />,
  <AccountBalanceWalletOutlinedIcon key="wallet" fontSize="small" />,
  <FactCheckOutlinedIcon key="records" fontSize="small" />,
  <LockOutlinedIcon key="privacy" fontSize="small" />,
];

function SecuritySection() {
  const { dictionary } = useLocalization();
  const security = dictionary.security;

  return (
    <SectionRoot id="security">
      <SecurityContainer maxWidth="lg">
        <SectionHeader>
          <SectionTitle component="h2">{security.title}</SectionTitle>
          <SectionDescription>{security.description}</SectionDescription>
        </SectionHeader>

        <Grid2 container spacing={2.5} alignItems="stretch">
          <Grid2 size={{ xs: 12, lg: 8 }}>
            <Grid2 container spacing={2}>
              {security.items.map((item, index) => (
                <Grid2 key={item.title} size={{ xs: 12, sm: 6 }}>
                  <SecurityCard>
                    <SecurityIcon>{securityIcons[index]}</SecurityIcon>
                    <SecurityTitle>{item.title}</SecurityTitle>
                    <SecurityDescription>{item.description}</SecurityDescription>
                  </SecurityCard>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>

          <Grid2 size={{ xs: 12, lg: 4 }}>
            <HighlightPanel>
              <ShieldOutlinedIcon color="secondary" />
              <HighlightTitle>{dictionary.common.brand}</HighlightTitle>
              <HighlightText>{security.highlight}</HighlightText>
              <HighlightList>
                {security.items.slice(0, 3).map((item) => (
                  <HighlightItem key={item.title}>
                    <CheckCircleOutlineRoundedIcon color="secondary" fontSize="small" />
                    {item.title}
                  </HighlightItem>
                ))}
              </HighlightList>
            </HighlightPanel>
          </Grid2>
        </Grid2>
      </SecurityContainer>
    </SectionRoot>
  );
}

export default SecuritySection;
