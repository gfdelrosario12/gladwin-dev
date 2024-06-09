"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { FaAngleDoubleDown } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Experiences() {
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
      <h1 className="text-center my-3 font-higher">Experiences</h1>
      <div className="hide">
        <h1 className="text-center my-1">Ledearship Experience</h1>
        <Timeline position="alternate" className="my-1">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className="fw-bold">Google Developer Student Clubs &ndash; PUP</Typography>
              <Typography className="fw-bold">December 2022 &ndash; August 2023</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="border-gradient mx-1 p-3">
                <Typography variant="h6" component="span" className="gradientText">
                  Community Development Fellow Lead
                </Typography>
                <Typography>
                  Played a key role in maintaining community relations during the organization's
                  founding year, contributing to the engagement and support of 200+ members.
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className="fw-bold">Google Developer Student Clubs &ndash; PUP</Typography>
              <Typography className="fw-bold">August 2023 &ndash; Present</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <div className="border-gradient mx-1 p-3">
                <Typography variant="h6" component="span" className="gradientText">
                  Chief Community Development Officer
                </Typography>
                <Typography>
                  Lead efforts to maintain strong community relations among 500+ members of the
                  organization, fostering engagement and collaboration within the organization.
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

      <div>
        <h1 className="text-center my-1">Ledearship Experience</h1>
        <Timeline position="alternate" className="my-1">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className="fw-bold">Google Developer Student Clubs &ndash; PUP</Typography>
              <Typography className="fw-bold">December 2022 &ndash; August 2023</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="border-gradient mx-1 p-3">
                <Typography variant="h6" component="span" className="gradientText">
                  Community Development Fellow Lead
                </Typography>
                <Typography>
                  Played a key role in maintaining community relations during the organization's
                  founding year, contributing to the engagement and support of 200+ members.
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className="fw-bold">August 2023 &ndash; Present</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <div className="border-gradient mx-1 p-3">
                <Typography variant="h6" component="span" className="gradientText">
                  Chief Community Development Officer
                </Typography>
                <Typography>
                  Lead efforts to maintain strong community relations among 500+ members of the
                  organization, fostering engagement and collaboration within the organization.
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div>
        <h1 className="text-center my-1">Career/Academic Experience</h1>
        <Timeline position="alternate" className="my-1">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className="fw-bold">Google Developer Student Clubs &ndash; PUP</Typography>
              <Typography className="fw-bold">Mobile Development Team</Typography>
              <Typography className="fw-bold">November 2022 &ndash; August 2023</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="border-gradient mx-1 p-3">
                <Typography variant="h6" component="span" className="gradientText">
                  Mobile Developer
                </Typography>
                <Typography>
                  Applied fundamental concepts of mobile development to understand its concepts and
                  best practices, contributing to the development of the organization's initiatives.
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography className="fw-bold">AWS Cloud Club &ndash; PUP</Typography>
              <Typography className="fw-bold">
                Department of Advance Network and Infrastructure
              </Typography>
              <Typography className="fw-bold">November 2023 &ndash; Present</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <div className="border-gradient mx-1 p-3">
                <Typography variant="h6" component="span" className="gradientText">
                  Department/Team Member
                </Typography>
                <Typography>
                  <ul>
                    <li>
                      Engaged in collaborative efforts within the team to explore and understand
                      various aspects of networking and AWS such as the virtual private cloud,
                      Amazon EC2 and S3.
                    </li>
                    <li>
                      Demonstrated adaptability and eagerness to understand networking concepts and
                      best practices by actively participating in team&ndash;based learning initiatives
                      and hands&ndash;on experience.
                    </li>
                  </ul>
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="fs-2">
        <Link href="/#certifications">
          <FaAngleDoubleDown className={theme === "light" ? "text-dark" : "text-light"} />
        </Link>
      </div>
    </div>
  );
}
