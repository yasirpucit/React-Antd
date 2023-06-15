import faker from 'faker';

const projectColumnsTable = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

const sampleProjects = [
  { name: 'Project 1', date: '2022-05-15' },
  { name: 'Project 2', date: '2022-07-30' },
  { name: 'Project 3', date: '2022-10-01' },
  { name: 'Project 4', date: '2022-10-05' },
  { name: 'Project 5', date: '2022-10-09' },
  { name: 'Project 6', date: '2022-11-21' },
  { name: 'Project 1', date: '2022-05-15' },
  { name: 'Project 2', date: '2022-07-30' },
  { name: 'Project 3', date: '2022-10-01' },
  { name: 'Project 4', date: '2022-10-05' },
  { name: 'Project 5', date: '2022-10-09' },
  { name: 'Project 6', date: '2022-11-21' },
  { name: 'Project 1', date: '2022-05-15' },
  { name: 'Project 2', date: '2022-07-30' },
  { name: 'Project 3', date: '2022-10-01' },
  { name: 'Project 4', date: '2022-10-05' },
  { name: 'Project 5', date: '2022-10-09' },
  { name: 'Project 6', date: '2022-11-21' },
  // Add more project objects as needed
];

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const sampleChartData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const sampleStatisticsData = [
  { label: 'Total Users', value: 100 },
  { label: 'Total Orders', value: 500 },
  { label: 'Revenue', value: '$10,000' },
  { label: 'Conversion Rate', value: '5%' },
];

const backgroundCardColors = ['#ADD8E6', '#D3D3D3', '#CCFFE5', '#FFCCCC'];

const generateRandomCurve = () => {
  const randomPoints = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
  const curve = randomPoints.map((point, index) => `${index * 10}% ${point * 10}%`).join(', ');
  return `polygon(0 0, ${curve}, 100% 0, 100% 100%, 0 100%)`;
};

export {
  projectColumnsTable,
  sampleProjects,
  sampleChartData,
  sampleStatisticsData,
  backgroundCardColors,
  lineChartOptions,
  generateRandomCurve,
};
