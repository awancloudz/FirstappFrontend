'use client'
import { useState, useEffect } from 'react'
import dynamic from "next/dynamic";
import Script from 'next/script';

const Movies = () => {

}

export default dynamic (() => Promise.resolve(Movies), {ssr: false})