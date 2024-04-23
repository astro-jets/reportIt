import { getcourses } from "@/app/actions/courses";
import { CourseProps } from "@/types/course";

const CoursesComponent = async () => {
    const res = await getcourses();
    const courses: CourseProps[] = res.courses;

    const ServiceCard = ({ icon, title, details }: { icon: JSX.Element; title: string; details: string }) => {
        return (
            <>
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="mb-9 rounded-[20px] bg-white p-4 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
                        <div className="mb-8 overflow-hidden flex h-60 w-full items-center justify-center rounded-xl">
                            {icon}
                        </div>
                        <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
                            {title}
                        </h4>
                        <p className="text-body-color dark:text-dark-6">{details}</p>
                    </div>
                </div>
            </>
        );
    };
    return (
        <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                Services
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    {
                        courses?.map(course => (
                            <ServiceCard
                                title={course.name}
                                details={course.description}
                                icon={
                                    <img
                                        src={`/uploads/${course.path}`}
                                    />
                                }
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default CoursesComponent;