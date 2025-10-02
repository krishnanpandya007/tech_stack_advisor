import React from 'react'

function Footer() {
  return (
    <footer className="border-t bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-600 flex-col flex-wrap justify-center gap-1">
                <p>Made with ❤️ by a developer for developers.</p>
                <p className='text-gray-400'>&copy; 2025 Tech Stack Advisor. </p> 
            </div>
        </div>
    </footer>
  )
}

export default Footer