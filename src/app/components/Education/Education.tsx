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

export default function Education() {
  return (
    <div className="content">
      <h1 className="text-center my-3 font-higher">Education</h1>
      <Timeline position="alternate" className="my-3">
        <TimelineItem>
          <TimelineOppositeContent>
            <p className="fw-bold">Senior High School</p>
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
            <p className="fw-bold">Undergraduate</p>
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
  );
}
