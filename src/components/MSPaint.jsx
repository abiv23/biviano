'use client'

import React, { useRef, useState, useEffect } from 'react';
import ConfettiCursor from '../components/ConfettiCursor'
import { Button } from "@/components/ui/button"

const colors = [
  '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080', '#808040', '#004040', '#0080FF', '#004080', '#8000FF', '#804000',
  '#FFFFFF', '#C0C0C0', '#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#FFFF80', '#00FF80', '#80FFFF', '#8080FF', '#FF0080', '#FF8040'
];

export default function Component() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [tool, setTool] = useState('brush');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context) {
      // Fill canvas with white background
      context.fillStyle = '#FFFFFF';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw mountain landscape
      setTimeout(() => {
        // Set up drawing context
        context.lineCap = 'round';
        context.lineJoin = 'round';
        
        // Draw sky gradient
        const skyGradient = context.createLinearGradient(0, 0, 0, 300);
        skyGradient.addColorStop(0, '#87CEEB'); // Light blue
        skyGradient.addColorStop(1, '#E0F7FF'); // Lighter blue near horizon
        context.fillStyle = skyGradient;
        context.fillRect(0, 0, canvas.width, 300);
        
        // Function to draw a mountain
        const drawMountain = (baseX, baseY, height, width, color, snowLine) => {
          // Mountain body
          context.beginPath();
          context.moveTo(baseX - width/2, baseY);
          context.lineTo(baseX, baseY - height);
          context.lineTo(baseX + width/2, baseY);
          context.closePath();
          context.fillStyle = color;
          context.fill();
          
          // Snow cap
          context.beginPath();
          context.moveTo(baseX - width/2 + width * 0.2, baseY - height * snowLine);
          context.lineTo(baseX, baseY - height);
          context.lineTo(baseX + width/2 - width * 0.2, baseY - height * snowLine);
          
          // Create jagged snow line
          let currentX = baseX + width/2 - width * 0.2;
          let currentY = baseY - height * snowLine;
          const steps = 12;
          const stepWidth = (width - width * 0.4) / steps;
          
          for (let i = 0; i < steps; i++) {
            const jitter = Math.random() * 10 - 5;
            currentX -= stepWidth;
            currentY = baseY - height * snowLine + jitter;
            context.lineTo(currentX, currentY);
          }
          
          context.closePath();
          context.fillStyle = '#FFFFFF';
          context.fill();
        };
        
        // Function to draw a pine tree
        const drawPineTree = (x, y, height, width) => {
          // Tree trunk
          context.beginPath();
          context.moveTo(x - width/10, y);
          context.lineTo(x + width/10, y);
          context.lineTo(x + width/10, y - height/4);
          context.lineTo(x - width/10, y - height/4);
          context.closePath();
          context.fillStyle = '#8B4513'; // Brown
          context.fill();
          
          // Tree foliage (triangles)
          for (let i = 0; i < 3; i++) {
            const triangleHeight = height * 0.3;
            const triangleY = y - height/4 - i * triangleHeight * 0.8;
            const triangleWidth = width * (1 - i * 0.15);
            
            context.beginPath();
            context.moveTo(x - triangleWidth/2, triangleY);
            context.lineTo(x, triangleY - triangleHeight);
            context.lineTo(x + triangleWidth/2, triangleY);
            context.closePath();
            context.fillStyle = '#005500'; // Dark green
            context.fill();
          }
        };
        
        // Draw distant mountains (background)
        drawMountain(200, 300, 180, 400, '#8a9bb0', 0.25); // Distant blue mountain
        drawMountain(500, 300, 220, 500, '#6e7d8e', 0.3);  // Distant blue mountain
        drawMountain(800, 300, 190, 420, '#7a8aa0', 0.28); // Distant blue mountain
        
        // Draw mid-range mountains
        drawMountain(300, 320, 150, 350, '#5d745d', 0.4);  // Green mountain
        drawMountain(600, 320, 170, 380, '#4a5c4a', 0.35); // Green mountain
        drawMountain(900, 320, 140, 320, '#556b55', 0.38); // Green mountain
        
        // Draw foothills
        context.beginPath();
        context.moveTo(0, 330);
        
        // Create undulating foothills
        let x = 0;
        while (x < canvas.width) {
          const height = 15 + Math.random() * 25;
          const width = 100 + Math.random() * 150;
          context.quadraticCurveTo(x + width/2, 330 - height, x + width, 330);
          x += width;
        }
        
        context.lineTo(canvas.width, 400);
        context.lineTo(0, 400);
        context.closePath();
        context.fillStyle = '#7d9964'; // Greenish
        context.fill();
        
        // Draw ground
        context.fillStyle = '#8fb377';
        context.fillRect(0, 330, canvas.width, canvas.height - 330);
        
        // Draw pine trees at various positions
        for (let i = 0; i < 30; i++) {
          const x = Math.random() * canvas.width;
          const y = 330 + Math.random() * 20;
          const height = 50 + Math.random() * 70;
          const width = height * 0.6;
          drawPineTree(x, y, height, width);
        }
        
        // Add some trees in foreground
        for (let i = 0; i < 8; i++) {
          const x = 50 + i * 130 + (Math.random() * 50 - 25);
          const y = 380 + (Math.random() * 20 - 10);
          const height = 90 + Math.random() * 50;
          const width = height * 0.7;
          drawPineTree(x, y, height, width);
        }
        
      }, 500); // Small delay to ensure canvas is ready
    }
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      context.beginPath();
      context.moveTo(x, y);
      setIsDrawing(true);
    }
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      context.lineTo(x, y);
      context.strokeStyle = tool === 'eraser' ? '#FFFFFF' : color;
      context.lineWidth = tool === 'eraser' ? 20 : 2;
      context.lineCap = 'round';
      context.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const startDragging = (e) => {
    setDragging(true);
    setPosition({
      x: e.clientX - (containerRef.current?.offsetLeft || 0),
      y: e.clientY - (containerRef.current?.offsetTop || 0)
    });
  };

  const onDrag = (e) => {
    if (dragging) {
      const left = e.clientX - position.x;
      const top = e.clientY - position.y;
      if (containerRef.current) {
        containerRef.current.style.left = `${left}px`;
        containerRef.current.style.top = `${top}px`;
      }
    }
  };

  const stopDragging = () => {
    setDragging(false);
  };

  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-teal-600 py-20" style={{ maxHeight: '100%' }}>
        {/* Creative Text Card */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6 border-4 border-pink-500 transform -rotate-2 w-90 text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-1">Let's Get Creative!</h2>
          <p className="text-gray-700">Fully-interactive, draw below with your cursor</p>
          <div className="mt-2 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 animate-bounce">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>
        
        <div 
          ref={containerRef}
          className="relative bg-gray-200 border-2 border-white shadow-md" 
          style={{ width: '800px', maxWidth: '95%' }}
        >
          <div 
            className="bg-blue-900 text-white px-2 py-1 flex justify-between items-center cursor-move"
            onMouseDown={startDragging}
            onMouseMove={onDrag}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
          >
            <span>MSbiv - Paint</span>
            <div className="flex gap-1">
              <Button variant="ghost" className="h-5 w-5 p-0 min-w-0 text-white hover:bg-blue-700">_</Button>
              <Button variant="ghost" className="h-5 w-5 p-0 min-w-0 text-white hover:bg-blue-700">□</Button>
              <Button variant="ghost" className="h-5 w-5 p-0 min-w-0 text-white hover:bg-blue-700">×</Button>
            </div>
          </div>
          <div className="bg-gray-300 px-2 py-1 text-sm">
            <span className="mr-4">File</span>
            <span className="mr-4">Edit</span>
            <span className="mr-4">View</span>
            <span className="mr-4">Image</span>
            <span className="mr-4">Options</span>
            <span>Help</span>
          </div>
          <div className="flex">
            <div className="w-8 bg-gray-300 p-0.5 border-r border-gray-400">
              <Button
                variant="ghost"
                className={`w-7 h-7 p-0 min-w-0 mb-0.5 ${tool === 'brush' ? 'bg-gray-300 border border-gray-400 shadow-inner' : ''}`}
                onClick={() => setTool('brush')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 12l-8-8-6 6c-2 2-2 5 0 7s5 2 7 0l7-7" />
                  <path d="M17 7l3 3" />
                </svg>
              </Button>
              <Button
                variant="ghost"
                className={`w-7 h-7 p-0 min-w-0 mb-0.5 ${tool === 'eraser' ? 'bg-gray-300 border border-gray-400 shadow-inner' : ''}`}
                onClick={() => setTool('eraser')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M20 20H7L3 16C2 15 2 13 3 12L13 2L22 11L20 20Z" />
                  <path d="M17 17L7 7" />
                </svg>
              </Button>
            </div>
            <div className="flex-grow overflow-auto border border-gray-400" style={{ width: '100%', height: '400px' }}>
              <canvas
                ref={canvasRef}
                width={1000}
                height={1000}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
              />
            </div>
          </div>
          <div className="flex bg-gray-300 p-1 border-t border-gray-400">
            <div className="flex flex-wrap gap-1">
              {colors.map((c) => (
                <Button
                  key={c}
                  variant="ghost"
                  className={`w-6 h-6 p-0 min-w-0 ${color === c ? 'ring-1 ring-gray-600' : ''}`}
                  style={{ backgroundColor: c }}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
          </div>
          <div className="bg-gray-300 px-2 py-1 text-sm border-t border-gray-400">
            For Help, click Help Topics on the Help Menu.
          </div>
        </div>
        
        {/* Contact Us Button */}
        <div className="mt-4">
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-3xl py-10 font-bold bg-pink-500 hover:bg-pink-600 text-white hover:cursor-pointer font-geist"
            onClick={() => alert('Contact form coming soon!')}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
}