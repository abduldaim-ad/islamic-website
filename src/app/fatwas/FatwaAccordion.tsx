"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FatwaAccordion = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          dir="rtl"
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
            ترتیبات عامہ
          </Typography>
          <Typography sx={{ color: "text.secondary", fontWeight: "bold" }}>
            یہ ایک اکارڈین ہے
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography dir="rtl" sx={{ fontWeight: "bold" }}>
            نالا فاسلیسی. فازلس ایک میٹس فیگیٹ. الیکوئم اگٹ میکسیموس اسٹ، اڈ
            ڈگنیسیم کو پیدا کرتا ہے.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          dir="rtl"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>صارفین</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            آپ موجودہ طور پر مالک نہیں ہیں
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography dir="rtl">
            دونیک پلیسریٹ، لیکٹس سید میٹس سیمپر، نیکٹس لیکٹس فیوگیٹ لیکٹس،
            واریئس پولوی نر دیام ایرس ان ایلیٹ. پیلنٹیسکوئی کنوالس لائریٹ
            لائریٹ.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          dir="rtl"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            ترقی یافتہ ترتیبات
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            پوری ویب سرور کے لئے فلٹرنگ بند ہوگئی ہے
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography dir="rtl">
            ننک ویٹئے اورسی، آکٹر ننک ان، وولٹپیٹ نسل. انٹیگر سیٹ ایمیٹ ایجینٹی
            ایروس، ویٹئے ایگٹس اوگ.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          dir="rtl"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            ذاتی ڈیٹا
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography dir="rtl">
            ننک ویٹئے اورسی، آکٹر ننک ان، وولٹپیٹ نسل. انٹیگر سیٹ ایمیٹ ایجینٹی
            ایروس، ویٹئے ایگٹس اوگ.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FatwaAccordion;
