import Navbar from "./components/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "./components/footer.";
function App() {
  return (
    <div className="">
      <Navbar />
      <div className="mt-8 lg:hidden">
        <div className="w-0 h-0 lg:hidden ml-auto">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-white to-sky-200 relative right-16 -rotate-90 -z-20 opacity-50 shadow-md"></div>
        </div>
        <img src="/Ellipse 4.png" className="mx-auto w-2/3 max-w-[350px] lg:w-auto" alt="ellipse4" />
        <div className="w-0 h-0 lg:hidden">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-white to-sky-200 relative left-[10vw] bottom-10 -z-20 opacity-50 shadow-md"></div>
        </div>
      </div>
      <div className="block lg:flex ">
        <div className="mx-8 py-24 lg:w-[60%] ">
          <div className="hidden lg:block lg:h-0 w-0">
            <div className="lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px] rounded-full bg-gradient-to-t shadow-md relative right-20 bottom-20 -z-20 opacity-50 from-white to-sky-200"></div>
          </div>
          <div className="space-y-3 lg:mt-20 xl:mt-40 lg:mx-20 lg:space-y-5">
            <div className="w-0 h-0 lg:hidden">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-white to-sky-200 relative right-20 bottom-10 -z-20 opacity-50 shadow-md"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 lg:text-5xl ">
              The best school <br /> for your kids
            </h2>
            <p className="text-gray-600 lg:text-xl ">Unlock Potential. Enroll Today!</p>
            <form className="lg:flex lg:space-x-5">
              <input type="email" placeholder="Your Email" className="w-full p-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-200 mb-4 lg:mb-0" />
              <button type="submit" className="py-3  bg-yellow-400 rounded-full w-1/2 font-extrabold  shadow-md hover:bg-yellow-500 transition duration-300 lg:py-0">
                Connect
              </button>
            </form>
          </div>
        </div>

        <div className="flex lg:block mt-4  lg:w-[40%] lg:mr-20 justify-center ">
          <div className="lg:flex   ">
            <img src="/Ellipse 4.png" className="hidden w-2/3 max-w-[350px] lg:w-[200px] xl:w-auto  mx-auto lg:block lg:mx-0  " alt="ellipse4" />
            <div className="hidden lg:block  lg:ml-10">
              <div className="lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] rounded-full bg-gradient-to-t shadow-md relative   -z-20 opacity-50 from-white to-sky-200 "></div>
            </div>
          </div>

          <div className="lg:flex lg:justify-between ">
            <div className="hidden lg:block  rotate-45">
              <div className="lg:w-[80px] lg:h-[80px] xl:w-[150px] xl:h-[150px] rounded-full bg-gradient-to-t shadow-md relative  -z-20 opacity-50 from-white to-sky-200"></div>
            </div>
            <img src="Ellipse 9.png" className=" lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px] mx-auto lg:block lg:ml-32  lg:relative lg:bottom-10 xl:bottom-20" alt="" />
            <div className="w-0 h-0 md:hidden">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-white to-sky-200 relative  left-[70vw] bottom-24 -z-20 opacity-50 shadow-lg"></div>
            </div>
          </div>

          <div className="lg:flex lg:justify-between lg:relative lg:bottom-20 xl:bottom-20">
            <img src="Ellipse 8.png" className="w-[150px] relative bottom-20 lg:static lg:w-1/2  mx-auto lg:block lg:mx-0 xl:w-80 lg:mr-20 " alt="" />

            <div className="hidden lg:block lg:mt-auto rotate-90 w-0 h-0">
              <div className=" rounded-full bg-gradient-to-t shadow-md relative right-60 top-20 -z-20 opacity-50 from-white to-sky-200 lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 lg:my-20">
        <h2 className="text-2xl font-semibold lg:text-4xl">Start Your Child's Learning Adventure Here</h2>
        <p className="text-gray-500 lg:text-xl">Infuse Your Child's Early Years with the Joy of Discovery!</p>
      </div>

      <div className="lg:hidden">
        <Carousel showThumbs={false} showIndicators={false} showArrows={false} showStatus={false} autoPlay={true} infiniteLoop swipeable swipeScrollTolerance={150}>
          <div>
            <div className="bg-[#ffa4bc] rounded-3xl text-white p-8 m-4 space-y-4 shadow-xl ">
              <img src="Rectangle 7.png" />
              <h2 className="text-2xl">Nursery</h2>
              <p className="text-lg">In Nursery, children are engaged in school activities such as reading, writing, number recognition and problem solving in a fun filled purposeful manner.</p>
            </div>
          </div>
          <div>
            <div className="bg-[#ffa4bc] rounded-3xl text-white p-8 m-4 space-y-4 shadow-xl ">
              <img src="Rectangle 7.png" />
              <h2 className="text-2xl">Nursery</h2>
              <p className="text-lg">In Nursery, children are engaged in school activities such as reading, writing, number recognition and problem solving in a fun filled purposeful manner.</p>
            </div>
          </div>
          <div className="pb-5">
            <div className="bg-[#ffa4bc] rounded-3xl text-white p-8 m-4 space-y-4 shadow-xl ">
              <img src="Rectangle 7.png" />
              <h2 className="text-2xl">Nursery</h2>
              <p className="text-lg">In Nursery, children are engaged in school activities such as reading, writing, number recognition and problem solving in a fun filled purposeful manner.</p>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="hidden lg:flex justify-evenly text-center xl:max-w-[85%] mx-auto">
        <div className="bg-[#ffa4bc] rounded-3xl text-white  space-y-4 shadow-xl w-1/4">
          <img src="Rectangle 7.png" className=" px-8 pt-8 mx-auto rounded-3xl" />
          <h2 className="text-2xl mx-8 xl:text-4xl xl:font-bold ">Playgroup</h2>
          <p className="text-lg mx-8 pb-2  xl:pb-16">Children start to explore the world around them as soon as they are born. Play group curriculum enables children to continue their exploration and innovate new things..</p>
        </div>
        <div className="bg-[#ffa4bc] rounded-3xl text-white  space-y-4 shadow-xl w-1/4 relative bottom-12">
          <img src="Rectangle 7.png" className="px-8  pt-8 mx-auto rounded-3xl" />
          <h2 className="text-2xl mx-8 xl:text-4xl xl:font-bold">Nursery</h2>
          <p className="text-lg mx-8 pb-2 xl:pb-16">In Nursery, children are engaged in school activities such as reading, writing, number recognition and problem solving in a fun filled purposeful manner.</p>
        </div>
        <div className="bg-[#ffa4bc] rounded-3xl text-white  space-y-4 shadow-xl w-1/4">
          <img src="Rectangle 7.png" className="px-8  pt-8 mx-auto rounded-3xl" />
          <h2 className="text-2xl mx-8 xl:text-4xl xl:font-bold">Kindergarten</h2>
          <p className="text-lg mx-8 pb-2 xl:pb-16">Kindergarten is a place where children will be able to experience nature close up and where children will be cared for and nourished </p>
        </div>
      </div>

      <div className="lg:flex lg:mt-20 lg:mx-20">
        <div className="mx-4 text-left mt-5 space-y-3 lg:w-1/2  xl:w-1/3 lg:my-auto">
          <h2 className="font-bold text-xl lg:text-2xl xl:text-4xl">We Strive to make education a fun experience </h2>
          <p className="leading-tight text-gray-400 lg:text-lg xl:text-xl">
            Cras ac leo purus. Mauris quis diam velit. Duis non tempor justo. Vivamus ac erat eu mi gravida fermentum. Suspendisse potenti. Ut pharetra euismod ultricies. Integer libero nisi, finibus et quam at, varius varius enim. Vivamus dictum sem
            sit amet odio viverra, sit amet tempor nisi vulputate. Nam aliquet, erat at varius pretium, quam sapien dictum sapien, a porttitor nisi sapien et massa. Proin condimentum, velit a efficitur pulvinar, libero nulla varius massa, in cursus
            eros enim quis libero. 4o
          </p>
        </div>

        <div className="mt-12  lg:w-1/2 xl:w-2/3">
          <div className="mx-auto border-4 border-dashed border-sky-200 rounded-xl w-[250px] rotate-12 lg:w-[400px] xl:w-[600px] lg:border-2 lg:px-10 lg:rounded-[20%]">
            <img src="image 4.png " className="-rotate-12 rounded-none" alt="" />
          </div>
        </div>
      </div>

      <h2 className="mx-auto px-4 mt-14 text-xl font-bold text-center lg:mt-20 lg:mb-10 lg:text-2xl xl:text-4xl">Embark on a Journey of Fun and Learning for Your Child</h2>

      <div className="block mx-4 mt-10 space-y-8 lg:hidden">
        <div>
          <h1 className="text-5xl font-bold text-red-500">01.</h1>
          <div className="mx-auto">
            <img src="Ellipse 3.png" className="mx-auto p-4  border-4 border-dashed border-red-400 rounded-full" alt="" />
          </div>
          <h2 className="text-center text-2xl font-bold mt-2">Table/Floor Toys </h2>
          <p className="text-center text-gray-500 mt-2 leading-tight">Children explore their world from birth. Our table and floor toys nurture this curiosity, encouraging innovation and hands-on learning through play.</p>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-red-500">02.</h1>
          <div className="mx-auto">
            <img src="Ellipse 2.png" className="mx-auto p-4  border-4 border-dashed border-red-400 rounded-full" alt="" />
          </div>
          <h2 className="text-center text-2xl font-bold mt-2">Water Games</h2>
          <p className="text-center text-gray-500 mt-2 leading-tight">From birth, children are natural explorers. Our water games nurture this curiosity, promoting innovation and hands-on learning through splashfilled play.</p>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-red-500">03.</h1>
          <div className="mx-auto">
            <img src="Ellipse 3-1.png" className="mx-auto p-4  border-4 border-dashed border-red-400 rounded-full" alt="" />
          </div>
          <h2 className="text-center text-2xl font-bold mt-2">Sport Activities</h2>
          <p className="text-center text-gray-500 mt-2 leading-tight">Children are born explorers. Our sports activities harness their natural curiosity, fostering physical fitness, teamwork, and skill development through engaging, active play</p>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-red-500">04.</h1>
          <div className="mx-auto">
            <img src="Ellipse 3-2.png" className="mx-auto p-4  border-4 border-dashed border-red-400 rounded-full" alt="" />
          </div>
          <h2 className="text-center text-2xl font-bold mt-2">Outdoor Games</h2>
          <p className="text-center text-gray-500 mt-2 leading-tight">Spark your child's curiosity with our outdoor games. Designed for active play, these games enhance physical fitness, teamwork, and imaginative play.</p>
        </div>
      </div>

      <div className="hidden lg:flex mx-8 ">
        <div className="my-auto m-8">
          <h1 className="text-5xl font-bold text-red-500">01.</h1>
          <div className="mx-auto">
            <img src="Ellipse 3.png" className="mx-auto p-4  border-4 border-dashed border-red-400 rounded-full" alt="" />
          </div>
          <h2 className="text-center text-2xl font-bold mt-2">Table/Floor Toys </h2>
          <p className="text-center text-gray-500 mt-2 leading-tight">Children explore their world from birth. Our table and floor toys nurture this curiosity, encouraging innovation and hands-on learning through play.</p>
        </div>
        <div className="">
          <div className="mb-40">
            <h1 className="text-5xl font-bold text-red-500">02.</h1>
            <div className="mx-auto">
              <img src="Ellipse 2.png" className="mx-auto p-4  border-4 border-dashed border-red-400 rounded-full" alt="" />
            </div>
            <h2 className="text-center text-2xl font-bold mt-2">Water Games</h2>
            <p className="text-center text-gray-500 mt-2 leading-tight">From birth, children are natural explorers. Our water games nurture this curiosity, promoting innovation and hands-on learning through splashfilled play.</p>
          </div>
          <div className="">
            <h1 className="text-5xl font-bold text-red-500">04.</h1>
            <div className="mx-auto">
              <img src="Ellipse 3-2.png" className="mx-auto p-4  border-4 border-dashed border-red-400 rounded-full" alt="" />
            </div>
            <h2 className="text-center text-2xl font-bold mt-2">Outdoor Games</h2>
            <p className="text-center text-gray-500 mt-2 leading-tight">Spark your child's curiosity with our outdoor games. Designed for active play, these games enhance physical fitness, teamwork, and imaginative play.</p>
          </div>
        </div>
        <div className="my-auto m-8">
          <h1 className="text-5xl font-bold text-red-500">03.</h1>
          <div className="mx-auto">
            <img src="Ellipse 3-1.png" className="mx-auto p-4  border-4 border-dashed border-red-400 rounded-full" alt="" />
          </div>
          <h2 className="text-center text-2xl font-bold mt-2">Sport Activities</h2>
          <p className="text-center text-gray-500 mt-2 leading-tight">Children are born explorers. Our sports activities harness their natural curiosity, fostering physical fitness, teamwork, and skill development through engaging, active play</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
