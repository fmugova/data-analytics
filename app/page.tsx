```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EduAnalytics Pro - Advanced Data Analysis Home & Grade Book</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#eff6ff',
                            500: '#3b82f6',
                            600: '#2563eb',
                            700: '#1d4ed8',
                            900: '#1e3a8a'
                        }
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0 flex items-center">
                        <i class="fas fa-chart-line text-primary-600 text-2xl mr-2"></i>
                        <span class="font-bold text-xl text-gray-900">EduAnalytics Pro</span>
                    </div>
                    <div class="hidden md:ml-6 md:flex md:space-x-8">
                        <a href="#Home" class="text-primary-600 border-b-2 border-primary-600 px-1 pt-1 pb-4 text-sm font-medium">Home</a>
                        <a href="#features" class="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium">Features</a>
                        <a href="#analytics" class="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium">Analytics</a>
                        <a href="#pricing" class="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium">Pricing</a>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Login</button>
                    <button class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium">Start Free Trial</button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-6">
                    Advanced Data Analysis Home
                    <span class="block text-blue-200">& Intelligent Grade Book</span>
                </h1>
                <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
                    Transform your PPE and GCSE exam data into actionable insights. Identify at-risk students, predict grades, and create targeted interventions with our AI-powered analytics platform.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                        Start Free Trial
                    </button>
                    <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition">
                        View Demo
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Key Metrics -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="text-4xl font-bold text-primary-600 mb-2">98%</div>
                    <div class="text-gray-600">Prediction Accuracy</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-green-600 mb-2">35%</div>
                    <div class="text-gray-600">Improved Student Outcomes</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-purple-600 mb-2">500+</div>
                    <div class="text-gray-600">Schools Using Platform</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-orange-600 mb-2">75%</div>
                    <div class="text-gray-600">Time Saved on Analysis</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Home Preview -->
    <section id="Home" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Comprehensive Analytics Home
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Get instant insights into student performance across all levels - from individual students to whole school overviews.
                </p>
            </div>

            <!-- Home Mockup -->
            <div class="bg-white rounded-xl shadow-2xl overflow-hidden">
                <!-- Home Header -->
                <div class="bg-gray-900 text-white p-4 flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                        <i class="fas fa-chart-line text-2xl"></i>
                        <span class="text-xl font-semibold">Analytics Home</span>
                    </div>
                    <div class="flex space-x-2">
                        <button class="bg-primary-600 px-4 py-2 rounded text-sm">PPE Analysis</button>
                        <button class="bg-gray-700 px-4 py-2 rounded text-sm">GCSE Tracking</button>
                        <button class="bg-gray-700 px-4 py-2 rounded text-sm">Predictions</button>
                    </div>
                </div>

                <!-- Home Content -->
                <div class="p-6">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <!-- Key Metrics Cards -->
                        <div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-blue-100">Total Students</p>
                                    <p class="text-3xl font-bold">1,247</p>
                                    <p class="text-sm text-blue-100">+5.2% from last term</p>
                                </div>
                                <i class="fas fa-users text-4xl text-blue-200"></i>
                            </div>
                        </div>
                        
                        <div class="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-green-100">Average Progress</p>
                                    <p class="text-3xl font-bold">+0.8</p>
                                    <p class="text-sm text-green-100">Above target grade</p>
                                </div>
                                <i class="fas fa-arrow-trend-up text-4xl text-green-200"></i>
                            </div>
                        </div>
                        
                        <div class="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-lg">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-red-100">At Risk Students</p>
                                    <p class="text-3xl font-bold">127</p>
                                    <p class="text-sm text-red-100">Requiring intervention</p>
                                </div>
                                <i class="fas fa-exclamation-triangle text-4xl text-red-200"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Charts Row -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        <div class="bg-white border rounded-lg p-6">
                            <h3 class="text-lg font-semibold mb-4">Grade Distribution</h3>
                            <canvas id="gradeChart" width="400" height="200"></canvas>
                        </div>
                        <div class="bg-white border rounded-lg p-6">
                            <h3 class="text-lg font-semibold mb-4">Progress Trends</h3>
                            <canvas id="progressChart" width="400" height="200"></canvas>
                        </div>
                    </div>

                    <!-- Data Table -->
                    <div class="bg-white border rounded-lg overflow-hidden">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-semibold">Recent Student Performance</h3>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PPE Grade</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Predicted Grade</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sarah Johnson</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mathematics</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Grade 7</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Grade 8</td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">On Track</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Michael Chen</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">English</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Grade 4</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Grade 6</td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">At Risk</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Emma Wilson</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Science</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Grade 8</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Grade 9</td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Exceeding</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Powerful Features for Every Education Level
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    From classroom teachers to senior leadership teams, our platform provides the tools you need to drive student success.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Feature Cards -->
                <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                    <div