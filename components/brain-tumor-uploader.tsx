"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Upload, X, FileImage, Check, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

type TumorClassification = {
    type: "Glioma" | "Meningioma" | "Pituitary" | "No Tumor"
    confidence: number
}

export function BrainTumorUploader() {
    const [file, setFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [progress, setProgress] = useState(0)
    const [result, setResult] = useState<TumorClassification | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0])
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0])
        }
    }

    const handleFile = (file: File) => {
        // Check if file is an image
        if (!file.type.match("image.*")) {
            alert("Please upload an image file")
            return
        }

        setFile(file)

        // Create preview
        const reader = new FileReader()
        reader.onload = () => {
            setPreview(reader.result as string)
        }
        reader.readAsDataURL(file)

        // Reset results
        setResult(null)
    }

    const clearFile = () => {
        setFile(null)
        setPreview(null)
        setResult(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    const analyzeImage = async () => {
        if (!file) return;
    
        setIsAnalyzing(true);
        setProgress(0);
    
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);
    
        const formData = new FormData();
        formData.append("file", file);
    
        try {
            const response = await fetch("http://127.0.0.1:5000/api/predict", {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error("Server responded with an error.");
            }
    
            const data = await response.json(); // ✅ Parse as JSON
    
            const formattedResult = data.result.includes("No Tumor")
                ? "No Tumor"
                : data.result.replace("Tumor: ", "");
    
            const confidenceValue = parseFloat(data.confidence.replace("%", ""));
    
            setResult({
                type: formattedResult as TumorClassification["type"],
                confidence: confidenceValue,
            });
        } catch (error) {
            console.error("Error analyzing image:", error);
            alert("Failed to analyze image.");
        } finally {
            clearInterval(interval);
            setIsAnalyzing(false);
            setProgress(100);
        }
    };
    
    
    const getSeverityColor = (confidence: number) => {
        if (confidence > 90) return "text-red-400"
        if (confidence > 70) return "text-orange-400"
        return "text-yellow-400"
    }

    return (
        <div className="max-w-3xl mx-auto">
            <div
                className={cn(
                    "border-2 border-dashed rounded-xl p-8 transition-all duration-200",
                    isDragging ? "border-purple-400 bg-purple-900/20" : "border-purple-700/50",
                    preview ? "border-opacity-50" : "border-opacity-100",
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {!preview ? (
                    <div className="flex flex-col items-center justify-center py-10">
                        <div className="bg-purple-800/30 p-4 rounded-full mb-6">
                            <FileImage className="w-10 h-10 text-purple-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Upload Brain Scan Image</h3>
                        <p className="text-purple-300 text-center mb-6 max-w-md">
                            Drag and drop your MRI image, or click to browse files
                        </p>
                        <Button onClick={() => fileInputRef.current?.click()} className="bg-white text-[#2a0a4a] hover:bg-white/90">
                            <Upload className="w-4 h-4 mr-2" />
                            Select Image
                        </Button>
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <div className="flex justify-end mb-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={clearFile}
                                className="text-purple-300 hover:text-white hover:bg-purple-900/50"
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative aspect-square rounded-lg overflow-hidden border border-purple-700/50">
                                <Image src={preview || "/placeholder.svg"} alt="Brain scan preview" fill className="object-cover" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-xl font-semibold mb-2">Image Ready for Analysis</h3>
                                <p className="text-purple-300 mb-4">File: {file?.name}</p>
                                {!isAnalyzing && !result ? (
                                    <Button
                                        onClick={analyzeImage}
                                        className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
                                    >
                                        Analyze Image
                                    </Button>
                                ) : isAnalyzing ? (
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <Loader2 className="w-5 h-5 animate-spin text-purple-300" />
                                            <span>Analyzing image...</span>
                                        </div>
                                        <Progress value={progress} className="h-2 bg-purple-900/50" />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {result && (
                <div className="mt-10 bg-[#1a0631]/60 rounded-xl p-6 border border-purple-700/30 animate-fadeIn">
                    <h2 className="text-2xl font-bold mb-6 text-center">Analysis Results</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#2a0a4a]/60 rounded-lg p-6 border border-purple-700/30">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold">Classification</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center",
                                            result.type === "No Tumor" ? "bg-green-900/30" : "bg-red-900/30",
                                        )}
                                    >
                                        {result.type === "No Tumor" ? (
                                            <Check className="w-6 h-6 text-green-400" />
                                        ) : (
                                            <AlertCircle className="w-6 h-6 text-red-400" />
                                        )}
                                    </div>
                                    <div>
                                        <h2
                                            className={cn(
                                                "text-lg font-bold",
                                                result.type === "No Tumor" ? "text-green-400" : getSeverityColor(result.confidence),
                                            )}
                                        >
                                            {result.type}
                                        </h2>
                                    </div>
                                    <div className="bg-purple-900/50 ml-3 px-3 py-1 rounded-full text-sm">
                                        {result.confidence.toFixed(1)}% confidence
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="bg-[#2a0a4a]/60 rounded-lg p-6 border border-purple-700/30">
                            <h3 className="text-xl font-semibold mb-4">Visualization</h3>
                            <div className="relative aspect-square rounded-lg overflow-hidden border border-purple-700/50">
                                <Image
                                    src={preview || "/placeholder.svg"}
                                    alt="Brain scan"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-purple-300 text-sm mb-4">
                            This analysis is for informational purposes only and should not replace professional medical advice.
                        </p>
                        <Button
                            onClick={clearFile}
                            variant="outline"
                            className="border-purple-700 text-purple-300 hover:bg-purple-900/30"
                        >
                            Upload New Image
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
