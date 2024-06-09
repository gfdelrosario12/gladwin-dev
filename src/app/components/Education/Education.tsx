"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { FaAngleDoubleDown } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Education() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <div className="content">
      <div>
        <h1 className="text-center my-3 font-higher">Education</h1>
        <Timeline position="alternate" className="my-3">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h6" className="fw-bold">
                Senior High School
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="border-gradient mx-1 p-3">
                <Typography variant="h6" component="span" className="gradientText">
                  Science, Technology, Engineering and Mathematics
                </Typography>
                <Typography>Espiritu Santo Parochial School</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h6" className="fw-bold">
                Undergraduate
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="border-gradient mx-1 p-3">
                <Typography variant="h6" component="span" className="gradientText">
                  Diploma in Computer Engineering Technology
                </Typography>
                <Typography>Polytechnic University of the Philippines</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div>
        <h1 className="text-center font-higher">Awards</h1>
        <ul className="fs-3">
          <li>
            <Typography variant="body1">
              <p className="fs-3">
              <span className="gradientText">Diwata Overcode</span>: GDSC-Loyola&apos;s Hackfest 2024 Grand Champion
              </p>
            </Typography>
          </li>
        </ul>
      </div>
      <div className="fs-2">
        <Link href="/#skillset">
          <FaAngleDoubleDown className={theme === "light" ? "text-dark" : "text-light"} />
        </Link>
      </div>
    </div>
  );
}
