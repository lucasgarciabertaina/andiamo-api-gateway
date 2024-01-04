import { PartialType } from '@nestjs/mapped-types';
import { CreateZohoSdkDto } from './create-zoho-crm.dto';

export class UpdateZohoSdkDto extends PartialType(CreateZohoSdkDto) {}
