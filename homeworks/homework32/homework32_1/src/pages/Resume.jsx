const Resume = () => {
    return (
        <>
            <div className={'mt-5 border-b border-solid py-5'}>
                <h1>Oleksandr | Web Developer</h1>
                <p><span>Phone: <a href="#">+380672436404</a></span> | <span>Email: <a
                    href="#">magnuh10@gmail.com</a></span> | <span>GitHub: <a href="#">SashaMagDEv</a></span></p>
            </div>
            <div className={'border-b border-solid py-5'}>
                <p>
                    Web Developer with over 3 years of experience in backend and frontend development. Specialized in
                    building and maintaining web applications using Laravel, PHP, Next.js, and other modern
                    technologies. Skilled in API development, content management system integration, and ensuring smooth
                    interaction between frontend and backend.
                </p>
            </div>
            <div className={'border-b border-solid py-2'}>
                <h1>TECHNICAL SKILLS</h1>
            </div>
            <div className={'py-5 border-b border-solid'}>
                <p className={'text-left'}>
                    Programming Languages: PHP, JavaScript<br/>
                    Frameworks and Platforms: Laravel, Next.js, Node.js, WordPress, OkayCMS, React (basic)<br/>
                    Databases: MySQL<br/>
                    Web Technologies: HTML5, CSS3<br/>
                    Tools: Git, Composer, npm<br/>
                    CMS: WordPress, OkayCMS<br/>
                    English Proficiency: Basicv
                </p>
            </div>
            <div className={'border-b border-solid py-2'}>
                <h1>WORK EXPERIENCE</h1>
            </div>
            <div className={'border-b border-solid'}>
                <h2 className={'my-5'}>Freelancer / Self-employed 2020 – Present Position: Web Developer</h2>
                <ul className={'list-disc py-5 text-left'}>
                    <li>Developed and maintained projects using Laravel and Next.js</li>
                    <li>Integrated CMS (WordPress, OkayCMS) for content management</li>
                    <li>Worked with MySQL for data storage and processing</li>
                    <li>Optimized code to meet industry standards</li>
                    <li>Created APIs to integrate frontend and backend systems</li>
                </ul>
            </div>
            <div className={'border-b border-solid '}>
                <h2 className={'border-b border-solid py-2'}>
                    Project: Category and News Management System
                </h2>
                <h3 className={'text-left pt-5'}>Technologies:</h3>
                <ul className={'list-disc py-5 text-left'}>
                    <li>Frontend: Next.js 14.2.5</li>
                    <li>Backend: Laravel 11</li>
                    <li>Database: MySQL</li>
                    <li>Styles: CSS Modules</li>
                    <li>Other Libraries: Axios for API interactions, React Spinners for loading indicators</li>
                </ul>
                <p>
                    Project Description: 
                    Developed a category and news management system with a backend on Laravel and frontend on Next.js. The project allows users to browse news by categories, create new articles, and provides breadcrumb navigation to enhance user experience.
                </p>
            </div>
        </>
    )
}
export default Resume;