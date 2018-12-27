import {Component, OnInit, Input} from '@angular/core';
import {BaseComponent} from '../../classes/base-component';
import {ActivatedRoute, Router} from '@angular/router';
import * as ipSchema from '../../dependencies/schemas/ip-schema';

// import mockIP from '/Users/rafsilva/Documents/isi/workspace/posh/ip-view-app/src/app/dependencies/files/ip-view.json';

@Component({
  selector: 'posh-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.scss']
})
export class IPComponent extends BaseComponent {
  @Input() ipID: string;
  public objectKeys = Object.keys;
  public ipJSONSchema: any;
  public ipJSON: any;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    super();
    this.ipJSONSchema = ipSchema.ipSchema;
    console.log(this.ipJSONSchema);
    this.ipJSON = {
      'basic-information': {
        'core-name': 'IP1034 - DDR4 Memory Controller',
        'description': 'The Cadence Denali Controller IP for DDR4 is a highly configurable DDR design that provides the high flexibility needed to enable application specific configurations ranging from high performance networking and mobile to consumer.     It includes sophisticated engines to rearrange transactions and maximize memory bus utilization. Programmable arbitration algorithms allow for multiple ports to share the memory bus efficiently. The Denali Controller IP for DDR4 is configurable to meet specific data profiles and enables performance optimization for an individual system and memory requirements.',
        'category': 'Memory Controller & PHY',
        'subcategory': 'DDR',
        'subsubcategory': 'DDR Controller',
        'category-specific-data': {
          'memory-type': 'DRAM',
          'memory-protocol': 'DDR4',
          'interface-protocol': 'AXI, AHB, OCP, DEN',
          'type': 'Controller',
          'data-rate': 'N/A',
          'datapath-width': '',
          'RAS-features': 'SECDED ECC, Error Scrubbing, Parity'
        }
      },
      'common-attributes': {
        'vendor-core': 'Cadence',
        'vendor-implement': {
          'asic-fabricator': {
            'name': 'N/A',
            'technology': 'N/A'
          },
          'fpga-vendor': {
            'name': 'N/A',
            'chips': 'N/A'
          }
        },
        'specifications': {
          'standard': 'N/A',
          'clock-frequency': 'N/A',
          'area': 'N/A',
          'power-consumption': 'N/A',
          'special-tools-req': 'N/A',
          'low-power-support': 'N/A',
          'components': 'N/A',
          'version': 'N/A',
          'needs-special-tools': 'N/A'
        }
      },
      'design-reuse-support': {
        'used-in-other-asic-designs': 'N/A',
        'synthesis-scripts-into-gate-level-netlist': 'N/A'
      },
      'level-of-maturity': {
        'characterization-data-from-silicon': 'N/A',
        'comprehensiveness-of-verification': 'N/A',
        'number-of-downloads': 0,
        'user-rating': 0,
        'number-of-chips-implemented': 0
      },
      'file-system': {
        'design': {
          'rtl-design': 'https://osf-dev.craftproject.org/2p2z7/files/osfstorage/59429ce3673c98164ed447ad',
          'gate-level-netlist': 'N/A',
          'physical-layout': 'N/A',
          'readme': 'https://readme.io/'
        },
        'special-tools': 'N/A',
        'testing-and-verification': {
          'testbenches': 'https://osf-dev.craftproject.org/2p2z7/files/osfstorage/5943d222673c98164ed44969',
          'design-corners-and-results': 'N/A',
          'scripts': 'N/A',
          'fpga-synthesis-result': 'N/A',
          'readme': 'N/A'
        },
        'manuals': {
          'algorithms': 'YES',
          'timing-diagrams': 'YES',
          'diagrams-structure-architecture': 'YES',
          'description-design-architecture': 'YES',
          'input-output-pins': 'N/A',
          'verification-fpga': 'N/A',
          'file-directory-structure': 'N/A',
          'related-products-ips': 'YES'
        },
        'applications': {
          'source-code': 'YES',
          'executable': 'https://osf-dev.craftproject.org/238av/',
          'readme': 'N/A'
        },
        'training-courses': 'YES'
      },
      'quality-verification': {
        'testbenches': 'N/A',
        'testbenches-results': 'N/A',
        'num-teams-simulation': 0,
        'num-teams-use': 0
      }
    };
  }

  ngOnInit() {
  }

  private parseCategoryKey(key: string) {
    let ipSchemaCategories = this.ipJSONSchema.definitions.categories;
    let category = this.ipJSON['basic-information'].category;
    let subcategory = this.ipJSON['basic-information'].subcategory;
    let subsubcategory = this.ipJSON['basic-information'].subsubcategory;

    if (ipSchemaCategories[category]['Category Specific Attributes'].properties[key]) {
      return ipSchemaCategories[category]['Category Specific Attributes'].properties[key].title;
    }

    if (ipSchemaCategories[category][subcategory]['Category Specific Attributes'].properties[key]) {
      return ipSchemaCategories[category][subcategory]['Category Specific Attributes'].properties[key].title;
    }

    if (ipSchemaCategories[category][subcategory][subsubcategory]['Category Specific Attributes'].properties[key]) {
      return ipSchemaCategories[category][subcategory][subsubcategory]['Category Specific Attributes'].properties[key].title;
    }
  }

  private parseTabKey(cat: string, key: string) {
    if (cat == 'file-system') {
      if (key == 'design') {
        return ['rtl-design', 'gate-level-netlist', 'physical-layout', 'readme'];
      }
      if (key == 'testing-and-verification') {
        return ['testbenches', 'design-corners-and-results', 'scripts', 'fpga-synthesis-result', 'readme'];
      }
      if (key == 'manuals') {
        return ['algorithms', 'timing-diagrams', 'diagrams-structure-architecture', 'description-design-architecture', 'input-output-pins', 'verification-fpga', 'file-directory-structure', 'related-products-ips'];
      }
      if (key == 'applications') {
        return ['source-code', 'executable', 'readme'];
      }
    }
    if (cat == 'common-attributes') {
      if (key == 'specifications') {
        return ['standard', 'clock-frequency', 'area', 'power-consumption', 'special-tools-req', 'low-power-support', 'components', 'version', 'needs-special-tools'];
      }
      if (key == 'asic-fabricator') {
        return ['name', 'technology'];
      }
      if (key == 'fpga-vendor') {
        return ['name', 'chips'];
      }
    }
    if (cat == 'quality-verification') {
      return ['testbenches', 'testbenches-results', 'num-teams-simulation', 'num-teams-use'];
    }
    if (cat == 'design-reuse-support') {
      return ['used-in-other-asic-designs', 'synthesis-scripts-into-gate-level-netlist'];
    }
    if (cat == 'level-of-maturity') {
      return ['characterization-data-from-silicon', 'comprehensiveness-of-verification', 'number-of-downloads', 'user-rating', 'number-of-chips-implemented'];
    }
  }

  private getTitleText(keys: Array<string>) {
    let base = this.ipJSONSchema;
    for (let i = 0; i < keys.length; i++) {
      base = base.properties[keys[i]];
      if (i == keys.length - 1) {
        return base.title;
      }
    }
  }

  private getPopupText(keys: Array<string>) {
    let base = this.ipJSONSchema;
    for (let i = 0; i < keys.length; i++) {
      base = base.properties[keys[i]];
      if (i == keys.length - 1) {
        return base.description;
      }
    }
  }

  private parseLabelColor(value: string) {
    return value == 'YES' ? 'green' : value == 'NO' ? 'red' : 'grey';
  }

  private isFile(value: string) {
    return typeof value != 'number' && (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('ftp://') || value.startsWith('file://'));
  }

  private isYesNo(value: string) {
    return value == 'YES' || value == 'NO' || value == 'N/A';
  }

}
