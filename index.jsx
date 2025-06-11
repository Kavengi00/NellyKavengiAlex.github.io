import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-5xl mx-auto grid gap-8">
        {/* Profile Card */}
        <Card className="shadow-lg rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="flex flex-col items-center text-center">
            <Avatar className="w-40 h-40 mb-4 ring-4 ring-blue-300">
              <AvatarImage src="/profile-photo.jpg" alt="Nelly Kavengi Alex" />
            </Avatar>
            <h1 className="text-4xl font-bold text-blue-900">Nelly Alex</h1>
            <p className="text-xl text-gray-700 mt-2">
              Data Scientist | Statistician | Python Enthusiast | Cloud Specialist
            </p>
            <p className="text-md text-gray-600 mt-2 max-w-xl">
              Turning data into insight and action – exploring the intersection of statistics, programming, and real-world impact in health and development.
            </p>
            <p className="text-md text-gray-600 mt-2 max-w-xl">
              <strong>Interests:</strong> Cloud Computing, Cloud Security, Cloud Networking.
              AWS Certified Cloud Practitioner with hands-on experience in deploying secure, scalable cloud infrastructure.
            </p>
          </CardContent>
        </Card>

        {/* Resume Section */}
        <Card className="shadow-lg rounded-2xl p-6 bg-white border border-gray-200">
          <CardContent>
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Resume</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Academic Background</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>BSc. in Applied Statistics with Computing – Moi University</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Work Experience</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Data Analyst – Kenya National Bureau of Statistics</li>
                  <li>Freelance Business Analyst – Various Clients</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Certifications</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>AWS Certified Cloud Practitioner</li>
                  <li>AWS Educate Machine Learning Foundations</li>
                  <li>Advanced Python for Data Science</li>
                  <li>Microsoft Office Specialist Certification</li>
                  <li>STATA Certification</li>
                  <li>SPSS Certification</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Skills</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Programming: Python, R, SQL</li>
                  <li>Cloud: AWS (EC2, S3, IAM, CloudWatch, Lambda, VPC), Azure Fundamentals</li>
                  <li>Tools: GitHub, Power BI, VS Code</li>
                  <li>Libraries: Scikit-Learn, Seaborn, Matplotlib, Pandas</li>
                  <li>Techniques: Machine Learning, Time Series Analysis, Web Scraping, Data Visualization</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="shadow-lg rounded-2xl p-6 bg-white border border-gray-200">
          <CardContent>
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Projects</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">1. Predicting Survival Chances on the Titanic</h3>
                <p>
                  Developed a predictive model using Adaboost and deployed it using Streamlit for real-time predictions.
                  <br />
                  <a href="https://github.com/Kavengi00/Titanic-Project" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    View Streamlit App
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">2. Web Scraping NHL Player Stats</h3>
                <p>
                  Built a Python script with BeautifulSoup to extract and analyze NHL player statistics from a live sports website.
                  <br />
                  <a href="https://medium.com/@kavengialex/beautiful-soup-meets-the-nhl-a-python-journey-into-sports-data-357957e09090" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Read Blog on Medium
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">3. Interactive Dashboards with Power BI</h3>
                <p>
                  Created dynamic dashboards using Power BI to visualize business and health datasets.
                  <br />
                  <a href="https://medium.com/@kavengialex/power-bi-in-action-unlocking-hotel-management-insights-through-data-d4bf75f5a7b1" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Read Blog on Medium
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lab Challenge Section */}
        <Card className="shadow-lg rounded-2xl p-6 bg-white border border-gray-200">
          <CardContent>
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Lab Challenge Writeups</h2>
            <p className="text-md text-gray-600 mb-4">
              This section highlights selected lab challenges completed during training or personal projects.
            </p>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Netflix Cleaning Project</h3>
                <p>
                  <strong>Problem:</strong> Raw Netflix dataset required extensive cleaning for analysis.
                  <br />
                  <strong>Approach:</strong> Identified and handled missing data, corrected data types, standardized column entries.
                  <br />
                  <strong>Tools:</strong> Python, Pandas, Jupyter Notebook.
                  <br />
                  <a href="https://medium.com/@kavengialex/netflix-data-detective-a-python-journey-from-chaos-to-clean-insights-cbe7aa7c2edc" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Read Blog on Medium
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">Who Survived the Titanic?</h3>
                <p>
                  <strong>Problem:</strong> Understanding passenger survival using data analysis and visualization.
                  <br />
                  <strong>Approach:</strong> Feature profiling, univariate and bivariate analysis, and storytelling with visuals.
                  <br />
                  <strong>Tools:</strong> Python, Seaborn, Matplotlib, Pandas.
                  <br />
                  <a href="https://medium.com/@kavengialex/who-survived-the-titanic-an-exploratory-journey-with-data-and-visuals-cbd38de06a17" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Read Blog on Medium
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
