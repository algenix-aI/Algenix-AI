"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check } from "lucide-react"

const pythonCode = `import algenix

# Initialize the Algenix AI model
model = algenix.Model("neural-v2")

# Load your data
data = algenix.load_dataset("your_data.csv")

# Train the model
model.train(
    data=data,
    epochs=100,
    batch_size=32,
    learning_rate=0.001
)

# Make predictions
predictions = model.predict(new_data)

# Evaluate model performance
metrics = model.evaluate(test_data)
print(f"Accuracy: {metrics['accuracy']:.2f}")
print(f"Precision: {metrics['precision']:.2f}")
print(f"Recall: {metrics['recall']:.2f}")

# Save the trained model
model.save("my_trained_model.algenix")`

const javascriptCode = `import { AlgenixAI } from 'algenix-js';

// Initialize the Algenix AI client
const algenix = new AlgenixAI({
  apiKey: process.env.ALGENIX_API_KEY
});

// Create a new model instance
const model = await algenix.createModel({
  type: 'neural-v2',
  parameters: {
    layers: 4,
    neurons: 128,
    activation: 'relu'
  }
});

// Train the model with your data
const trainingJob = await model.train({
  dataset: './training_data.json',
  epochs: 100,
  batchSize: 32,
  learningRate: 0.001
});

// Wait for training to complete
await trainingJob.wait();

// Make predictions
const predictions = await model.predict({
  data: newData
});

console.log('Predictions:', predictions);`

const apiCode = `curl -X POST https://api.algenix.ai/v1/models/predict \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "neural-v2",
    "input": {
      "text": "Analyze the sentiment of this review",
      "data": {
        "review": "The product exceeded my expectations in every way!"
      }
    },
    "parameters": {
      "temperature": 0.7,
      "max_tokens": 100
    }
  }'`

export default function CodeSection() {
  const [activeTab, setActiveTab] = useState("python")
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    const codeToCopy = activeTab === "python" ? pythonCode : activeTab === "javascript" ? javascriptCode : apiCode

    navigator.clipboard.writeText(codeToCopy)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <section id="code" className="py-20 bg-purple-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="italic">Simple</span> Integration
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Integrate Algenix AI into your applications with just a few lines of code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-purple-950 rounded-lg shadow-xl overflow-hidden border border-purple-800">
            <div className="flex justify-between items-center p-4 bg-purple-900">
              <Tabs defaultValue="python" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="bg-purple-950/50">
                  <TabsTrigger value="python" className="data-[state=active]:bg-purple-800">
                    Python
                  </TabsTrigger>
                  <TabsTrigger value="javascript" className="data-[state=active]:bg-purple-800">
                    JavaScript
                  </TabsTrigger>
                  <TabsTrigger value="api" className="data-[state=active]:bg-purple-800">
                    REST API
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <Button
                variant="ghost"
                size="icon"
                onClick={copyCode}
                className="text-gray-300 hover:text-white hover:bg-purple-800/50"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>

            <div className="p-6 overflow-x-auto">
              <Tabs defaultValue="python" value={activeTab}>
                <TabsContent value="python" className="mt-0">
                  <pre className="text-gray-300 font-mono text-sm">
                    <code>{pythonCode}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="javascript" className="mt-0">
                  <pre className="text-gray-300 font-mono text-sm">
                    <code>{javascriptCode}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="api" className="mt-0">
                  <pre className="text-gray-300 font-mono text-sm">
                    <code>{apiCode}</code>
                  </pre>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
