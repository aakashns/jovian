import { CourseCard } from "@/components/course-card";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Link from "next/link";

const courses = [
  {
    id: "data-analysis-with-python-zero-to-pandas",
    name: "Data Analysis with Python: Zero to Pandas",
    description:
      "A coding-focused introduction Python, Numpy, Pandas, data visualization, and exploratory data analysis",
    cover:
      "https://api.jovian.com/api/learn/course/data-analysis-with-python-zero-to-pandas/images/252bf80ff86f499f95d657e714a85b7a/NMXgZCK.png",
  },
  {
    id: "data-structured-and-algorithms-in-python",
    name: "Data Structures and Algorithms in Python",
    description:
      "A beginner-friendly introduction to data structures and algorithms using the Python programming language to help you prepare for coding interviews",
    cover:
      "https://api.jovian.com/api/learn/course/data-analysis-with-python-zero-to-pandas/images/252bf80ff86f499f95d657e714a85b7a/NMXgZCK.png",
  },
  {
    id: "deep-learning-with-pytorch-zero-to-gans",
    name: "Deep Learning with PyTorch: Zero to GANs",
    description:
      "A beginner-friendly introduction to Deep Learning using the PyTorch framework. Watch hands-on tutorials, and train models on cloud Jupyter notebooks.",
    cover: "https://jovian.com/courses/zerotogans_social.png",
  },
  {
    id: "data-structured-and-algorithms-in-python2",
    name: "Data Structures and Algorithms in Python",
    description:
      "A beginner-friendly introduction to data structures and algorithms using the Python programming language to help you prepare for coding interviews",
    cover:
      "https://api.jovian.com/api/learn/course/data-analysis-with-python-zero-to-pandas/images/252bf80ff86f499f95d657e714a85b7a/NMXgZCK.png",
  },
  {
    id: "deep-learning-with-pytorch-zero-to-gans3",
    name: "Deep Learning with PyTorch: Zero to GANs",
    description:
      "A beginner-friendly introduction to Deep Learning using the PyTorch framework. Watch hands-on tutorials, and train models on cloud Jupyter notebooks.",
    cover: "https://jovian.com/courses/zerotogans_social.png",
  },
];

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>
          Beginner-Friendly Practical Online Courses
        </PageHeaderHeading>
        <PageHeaderDescription>
          Learn practical tech skills. Build real-world projects. Showcase your
          work. Join a global community.
        </PageHeaderDescription>
      </PageHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-12">
        {courses.map(({ id, name, description, cover }) => (
          <Link href={`/learn/${id}`} key={id}>
            <CourseCard
              className="hover:scale-105"
              name={name}
              id={id}
              description={description}
              cover={cover}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
