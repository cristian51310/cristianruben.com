export interface Resume {
  profile: string;
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  skills: string[];
}

export interface Education {
  title: string;
  start: string;
  end: string;
  place: string;
  city: string;
  country: string;
}

export interface Experience {
  title: string;
  start: string;
  end: string;
  company: string;
  city: string;
  country: string;
  description: string;
}

export interface Certification {
  title: string;
  link: string;
}

export const resume: Resume = {
  profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  education: [
    {
      title: "title name",
      start: "start date",
      end: "end date",
      place: "study center name",
      city: "city name",
      country: "country name",
    },
    {
      title: "title name",
      start: "start date",
      end: "end date",
      place: "study center name",
      city: "city name",
      country: "country name",
    },
  ],
  experience: [
    {
      title: "Job Title at Project or Company Name",
      start: "start date",
      end: "end date",
      company: "company name",
      city: "city name",
      country: "country name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
      title: "Job Title at Project or Company Namee",
      start: "start date",
      end: "end date",
      company: "company name",
      city: "city name",
      country: "country name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
  ],
  certifications: [
    {
      title: "Certification name",
      link: "date",
    },
    {
      title: "Certification name",
      link: "date",
    },
  ],
  skills: [
    "Skill Name",
    "Skill Name",
    "Skill Name",
    "Skill Name",
    "Skill Name",
    "Skill Name",
    "Skill Name",
    "Skill Name",
  ],
}