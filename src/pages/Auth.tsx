import bgLog from '../../public/bg-log.png';
import fastIcon from '../../public/fast.svg';
import chartIcon from '../../public/chart.svg';
import schoolIcon from '../../public/school.svg';
import { useState } from 'react';

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState('login');

  return (
    <div className="flex min-h-screen font-[family-name:var(--font-family-main)]">
      {/* Left side with background image */}
      <div
        className="w-1/2 flex items-center justify-center"
        style={{
          backgroundImage: `url('${bgLog}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-white p-8 max-w-md">
          <div>
            <h1 className="text-xl font-semibold">
              Empowering Global Student Recruitment
            </h1>
            <p className="text-sm mt-4">
              Manage your entire student pipeline from interest to enrollment
              with the most intuitive CRM built for higher education professionals.
            </p>

            <div className='flex gap-3.5 items-center mt-8'>
              <img className='w-10 h-10' src={fastIcon} alt="Racket" />
              <h3 className='font-semibold text-tertiary'>
                Accelerate your admission process by 40%
              </h3>
            </div>

            <div className='flex gap-3.5 items-center mt-6'>
              <img className='w-10 h-10' src={chartIcon} alt="Racket" />
              <h3 className='font-semibold text-tertiary'>
                Real-time student engagement analytics
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Right side for signup/login */}
      <div className="w-1/2 bg-tertiary p-10 flex flex-col">
        {/* Header */}
        <nav className='flex justify-start items-center gap-3 mb-12'>
          <img className='w-10 h-10' src={schoolIcon} alt="Log" />
          <h1 className='text-neutral text-2xl font-bold'>EduFlow CRM</h1>
        </nav>

        {/* Form centered */}
        <div className='flex flex-col items-center justify-center flex-1'>
          {/* Tabs */}
          <div className='flex items-center justify-center gap-1 mb-8 bg-[#DCE9FF] rounded-lg p-1'>
            <button 
              onClick={() => setMode('login')}
              className={`cursor-pointer px-8 py-2 font-semibold rounded transition ${mode === 'login' ? 'bg-white text-neutral' : 'text-neutral hover:bg-white'}`}>
              Log In
            </button>
            <button 
              onClick={() => setMode('signup')}
              className={`cursor-pointer px-8 py-2 font-semibold rounded transition ${mode === 'signup' ? 'bg-white text-neutral' : 'text-neutral hover:bg-white'}`}>
              Create Account
            </button>
          </div>

          {/* Form card */}
          <div className="w-full items-center max-w-sm">
            {/* Login Form */}
            {mode === 'login' && (
              <>
                <h1 className='text-3xl pb-5 font-bold'>
                  Welcome Back
                </h1>
                <div className="flex flex-col gap-4 bg-white p-8 rounded-2xl font-sans shadow-lg">

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-[#151717] font-semibold text-sm mb-2">Email</label>
                    <div className="flex items-center border border-[#ecedec] rounded-xl h-[50px] px-3 transition-all duration-200 focus-within:border-[#2d79f3]">
                      <svg className="shrink-0" height={20} viewBox="0 0 32 32" width={20} xmlns="http://www.w3.org/2000/svg">
                        <g><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" /></g>
                      </svg>
                      <input type="text" className="ml-2.5 border-none w-full h-full outline-none text-sm" placeholder="Enter your Email" />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="flex flex-col">
                    <label className="text-[#151717] font-semibold text-sm mb-2">Password</label>
                    <div className="flex items-center border border-[#ecedec] rounded-xl h-[50px] px-3 transition-all duration-200 focus-within:border-[#2d79f3]">
                      <svg className="shrink-0" height={20} viewBox="-64 0 512 512" width={20} xmlns="http://www.w3.org/2000/svg">
                        <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
                        <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
                      </svg>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="ml-2.5 border-none w-full h-full outline-none text-sm"
                        placeholder="Enter your Password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="shrink-0 ml-auto cursor-pointer bg-transparent border-0 p-0"
                      >
                        <svg viewBox="0 0 576 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Remember me + Forgot password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="cursor-pointer" />
                      <label className="text-sm text-black font-normal">Remember me</label>
                    </div>
                    <span className="text-sm text-[#2d79f3] font-medium cursor-pointer ml-1">Forgot password?</span>
                  </div>

                  {/* Submit */}
                  <button className="mt-5 mb-2.5 bg-[#151717] text-white text-[15px] font-medium rounded-xl h-[50px] w-full cursor-pointer hover:bg-[#252727] transition-colors duration-200">
                    Log In 
                  </button>

                  {/* Divider */}
                  <p className="text-center text-black text-sm my-1 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-[35%] before:h-px before:bg-gray-200 after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-[35%] after:h-px after:bg-gray-200">
                    Or With
                  </p>

                  {/* Social buttons */}
                  <div className="flex gap-2.5">
                    <button className="flex-1 mt-2.5 h-[50px] rounded-xl flex justify-center items-center font-medium gap-2.5 border border-[#ededef] bg-white cursor-pointer hover:border-[#2d79f3] transition-colors duration-200">
                      <svg version="1.1" width={20} height={20} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path style={{ fill: '#FBBB00' }} d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z" />
                        <path style={{ fill: '#518EF8' }} d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" />
                        <path style={{ fill: '#28B446' }} d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" />
                        <path style={{ fill: '#F14336' }} d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0C318.115,0,375.068,22.126,419.404,58.936z" />
                      </svg>
                      Google
                    </button>

                    <button className="flex-1 mt-2.5 h-[50px] rounded-xl flex justify-center items-center font-medium gap-2.5 border border-[#ededef] bg-white cursor-pointer hover:border-[#2d79f3] transition-colors duration-200">
                      <svg height={20} width={20} viewBox="0 0 22.773 22.773" xmlns="http://www.w3.org/2000/svg">
                        <g><g>
                          <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                          <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                        </g></g>
                      </svg>
                      Apple
                    </button>
                  </div>

                </div>
              </>
            )}

            {/* Signup Form */}
            {mode === 'signup' && (
              <div>
                <h1 className='text-3xl pb-5 font-bold'>
                  Create Account
                </h1>
                <div className="flex flex-col gap-4 bg-white p-8 rounded-2xl font-sans shadow-lg">

                  {/* First Name */}
                  <div className="flex flex-col">
                    <label className="text-[#151717] font-semibold text-sm mb-2">First Name</label>
                    <input type="text" className="border border-[#ecedec] rounded-xl h-[50px] px-3 outline-none focus:border-[#2d79f3] text-sm" placeholder="Enter your first name" />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col">
                    <label className="text-[#151717] font-semibold text-sm mb-2">Last Name</label>
                    <input type="text" className="border border-[#ecedec] rounded-xl h-[50px] px-3 outline-none focus:border-[#2d79f3] text-sm" placeholder="Enter your last name" />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-[#151717] font-semibold text-sm mb-2">Email</label>
                    <div className="flex items-center border border-[#ecedec] rounded-xl h-[50px] px-3 transition-all duration-200 focus-within:border-[#2d79f3]">
                      <svg className="shrink-0" height={20} viewBox="0 0 32 32" width={20} xmlns="http://www.w3.org/2000/svg">
                        <g><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" /></g>
                      </svg>
                      <input type="text" className="ml-2.5 border-none w-full h-full outline-none text-sm" placeholder="Enter your Email" />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="flex flex-col">
                    <label className="text-[#151717] font-semibold text-sm mb-2">Password</label>
                    <div className="flex items-center border border-[#ecedec] rounded-xl h-[50px] px-3 transition-all duration-200 focus-within:border-[#2d79f3]">
                      <svg className="shrink-0" height={20} viewBox="-64 0 512 512" width={20} xmlns="http://www.w3.org/2000/svg">
                        <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
                        <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
                      </svg>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="ml-2.5 border-none w-full h-full outline-none text-sm"
                        placeholder="Enter your Password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="shrink-0 ml-auto cursor-pointer bg-transparent border-0 p-0"
                      >
                        <svg viewBox="0 0 576 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="cursor-pointer" />
                    <label className="text-sm text-black font-normal">I agree to the <span className="text-[#2d79f3] font-medium">Terms & Conditions</span></label>
                  </div>

                  {/* Submit */}
                  <button className="mt-5 mb-2.5 bg-[#151717] text-white text-[15px] font-medium rounded-xl h-[50px] w-full cursor-pointer hover:bg-[#252727] transition-colors duration-200">
                    Create Account
                  </button>

                  {/* Divider */}
                  <p className="text-center text-black text-sm my-1 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-[35%] before:h-px before:bg-gray-200 after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-[35%] after:h-px after:bg-gray-200">
                    Or With
                  </p>

                  {/* Social buttons */}
                  <div className="flex gap-2.5">
                    <button className="flex-1 mt-2.5 h-[50px] rounded-xl flex justify-center items-center font-medium gap-2.5 border border-[#ededef] bg-white cursor-pointer hover:border-[#2d79f3] transition-colors duration-200">
                      <svg version="1.1" width={20} height={20} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path style={{ fill: '#FBBB00' }} d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z" />
                        <path style={{ fill: '#518EF8' }} d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" />
                        <path style={{ fill: '#28B446' }} d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" />
                        <path style={{ fill: '#F14336' }} d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0C318.115,0,375.068,22.126,419.404,58.936z" />
                      </svg>
                      Google
                    </button>

                    <button className="flex-1 mt-2.5 h-[50px] rounded-xl flex justify-center items-center font-medium gap-2.5 border border-[#ededef] bg-white cursor-pointer hover:border-[#2d79f3] transition-colors duration-200">
                      <svg height={20} width={20} viewBox="0 0 22.773 22.773" xmlns="http://www.w3.org/2000/svg">
                        <g><g>
                          <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                          <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                        </g></g>
                      </svg>
                      Apple
                    </button>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;