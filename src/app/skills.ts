import {Skill} from './skill';

export const SKILLS: Skill[] = [
  {
    title: 'BACKEND',
    percentage: 0,
    max: 81,
    color: 'green',
    anim: 'running',
    details: [
      {
        name: 'PHP',
        children: [
          {
            name: 'Symfony',
            children: [
              {name: 'API Platform'},
              {name: 'Swagger'},
              {name: 'GuzzleHTTP'}]
          },
          {
            name: 'Qualité',
            children: [
              {name: 'PHP Stan'},
              {name: 'PHP-cs-fixer'},
              {name: 'PHPMD'},
              {name: 'PHPCPD'}]
          },
          {
            name: 'Tests',
            children: [
              {name: 'PhpUnit'},
              {name: 'Behat'}]
          },
          {name: 'Composer'},
          {name: 'CodeIgniter'}]
      },
      {
        name: 'Base de données',
        children: [
          {
            name: 'SGBD',
            children: [
              {name: 'Mysql'},
              {name: 'SQLite'},
              {name: 'Redis'}]
          },
          {
            name: 'Administraion',
            children: [
              {name: 'Mysql Workbench'},
              {name: 'PHPMyAdmin'},
              {name: 'DBeaver'},
              {name: 'DataGrip'}]
          }]
      }]
  },
  {
    title: 'FRONTEND',
    percentage: 0,
    max: 37,
    color: 'blue',
    anim: 'running',
    details: [
      {
        name: 'HTML',
        children: [
          {name: 'What else ?'}
        ]
      },
      {
        name: 'CSS',
        children: [
          {name: 'Bootstrap'},
          {name: 'PureCSS'}
        ]
      },
      {
        name: 'JavaScript',
        children: [
          {
            name: 'Angular',
            children: [
              {name: 'Material Design'}
            ]
          },
          {name: 'jQuery'},
          {name: 'Node.js'},
          {name: 'Cordova'},
          ]
      },
    ]},
  {
    title: 'DEVOPS',
    percentage: 0,
    max: 62,
    color: 'orange',
    anim: 'running',
    details: [
      {
        name: 'Virtualisation',
        children: [
          {
            name: 'Docker',
            children: [
              {name: 'Private Docker Hub'}
            ]
          },
          {
            name: 'VMware',
            children: [
              {name: 'VMware ESX/ESXI'},
              {name: 'VMware Workstation'},
              {name: 'VMware Fusion'}
            ]
          },
          {
            name: 'Linux',
            children: [
              {name: 'CentOS'},
              {name: 'Debian'},
              {name: 'Ubuntu'},
              {name: 'Ututo'},
            ]
          },
          {name: 'Vagrant'},
          {name: 'VirtualBox'}
        ]
      },
      {
        name: 'CI / CD',
        children: [
          {
            name: 'Ansible',
            children: [
              {name: 'AWX'},
            ],
          },
          {name: 'GitLab'},
          {name: 'GitHub'},
          {name: 'Jenkins'},
          {name: 'SquashTest'}
        ]
      },
      {
        name: 'Monitoring',
        children: [
          {
            name: 'Suite ELK',
            children: [
              {name: 'Elasticsearch'},
              {name: 'Elastalert'},
              {name: 'Metricbeat'},
              {name: 'Filebeat'},
              {name: 'Logstash'},
              {name: 'Kibana'},
            ],
          },
          {name: 'Nagios'},
          {name: 'Centreon'},
        ]
      },
      {
        name: 'Outils divers',
        children: [
          {name: 'RabbitMQ'},
          {name: 'Keycloack'},
          {name: 'Git'},
          {name: 'SVN'},
        ]
      }]
  }];
