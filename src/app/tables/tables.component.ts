import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    public tableData3: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'Type', 'Duties'],
          dataRows: [
              // tslint:disable-next-line:max-line-length
              ['Management', 'Management of 21 projects with different objectives (B2B, B2C, Gamification, HR, Time Management, BIGDATA, CRM, Mobile, Biometrics, Communication, Logistics, Supply Chain).'],
              // tslint:disable-next-line:max-line-length
              ['Development', 'Conceptualized, designed, developed and led development of robust software products for managing the operations and tasks over 20000 users at time. Utilized Java 8, Angular 8, Message broker, indexed DB, Spring Boot, JPA, Drools, Indexed DB, DB2, Elastic Search, Firebase, Docker, JBOSS.'],
              // tslint:disable-next-line:max-line-length
              ['Architecture', 'Architecture of 15 projects with various technologies (Java, Spring, Hibernate, Kotlin, Swift, JSF, Angular, Node, JBOSS, SQL, DB2, ElasticSearch, Orient DB, Liferay, Kubernetes, Firebase, IBM frameworks and more)'],
              // tslint:disable-next-line:max-line-length
              ['Proficiency', 'Proficiency in the management of different tools (Git, Bitbucket, Jira, Confluence, MS Project, Slack) and methodologies (RUP, Scrum, Kanban).'],
              // tslint:disable-next-line:max-line-length
              ['Member of', 'Member of architect team who define the entire definition of the life cycle in development (DevOps) and projects (PMO & CMMI consultant).']
          ]
      };
      this.tableData2 = {
          headerRow: [ 'Name', 'Duties / Project', 'URL'],
          dataRows: [
              // tslint:disable-next-line:max-line-length
              ['Development', 'Development of 12 projects to different departments in RETAIL INDUSTRY ' , '(HR, Operations, Finance, Commercial, Marketing, Customer Care)'],
              // tslint:disable-next-line:max-line-length
              ['Architecture', 'Designed and built in-home web software with architecture that composed various platforms and databases' , 'Java, Spring, Hibernate, Maven, Gradle, Struts, JSF, Spring MVC, Angular, Liferay, JavaScript, HTML, CSS, Restful, JBOSS, SQL,DB2, MySQL, ElasticSearch, NoSQL, JSON'],
              ['My Portal', 'Web portal for employers implemented with Liferay' , 'https://www.cfavorita.ec/miportal'],
              ['B2B', 'Reporting system for suppliers in B2B Portal' , 'https://www.cfavorita.ec/b2b' ],
              ['FLUX', 'Flow to communicate suppliers request.' , 'https://www.cfavorita.ec/flux'],
              ['GESTAH', 'Human resources custom software' , 'Intranet' ],
              ['Workflow', 'Workflow engine made in java' , 'Intranet' ],
              ['SIF', 'Billing system' , 'https://www.cfavorita.ec/felectronica' ],
              ['SIM', 'System to manage real estate inventory with lease module' , 'Intranet' ],
              ['SISEG', 'Security System to register theft in department stores' , 'Intranet' ],
              ['SICMER', 'General merchandise management system' , 'Intranet' ],
              ['F4', 'Flow to manage merchandise technical service' , 'Intranet' ],
              ['MW', 'Extended warranty sales system.' , 'Intranet' ],
              ['MQ', 'Automatic data migration system.' , 'Intranet' ]
          ]
      };
      this.tableData3 = {
          headerRow: [ 'Project', 'Description', 'URL'],
          dataRows: [
              ['Jarimba', 'Developed a content management system for the community' , 'https://sourceforge.net/projects/jarimba'],
              // tslint:disable-next-line:max-line-length
              ['SOT', 'Designed and developed the first recruitment portal for the 1st RETAIL company in the country' , 'https://www.cfavorita.ec/ofertalaboral/'],
              ['SISCO', 'Implemented of Modules for handling FTP Files and novelty monitors for SISCO project.' , 'Intranet'],
              ['B2B', 'Developed the Java Modules for B2B portal' , 'https://www.cfavorita.ec/b2b' ],
              ['Map', 'Leader of maps project' , 'Intranet'],
              ['Research', 'Researched the processes and new technologies of the information' , '' ],
              ['Teach', 'Trained the technical personnel' , '' ]
          ]
      };
  }

}
