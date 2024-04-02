import {motion} from 'framer-motion'
const MotionWrap = (Component,classes) => function HOC() {
  return (
    <motion.div
    whileInView={{y:[100,50,0],opacity:[0,0,1]}}
     transition={{duration:0.5}}
     className={`${classes} flex justify-center items-center`}
    >
      <Component/>
      </motion.div>
  )
}

export default MotionWrap
